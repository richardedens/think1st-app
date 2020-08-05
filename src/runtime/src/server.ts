// Setup server.
import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Request, Response } from "express";
import session from "express-session";
import http from "http";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import createError from "http-errors";
import path from "path";
import logger from "morgan";
import sassMiddleware from "node-sass-middleware";
import helmet from "helmet";
import cors from "cors";
import csrf from "csurf";
import routes from "./routes";

// Setup passport.
import passport from "passport";
import passport_local from "passport-local";
import User from "./entity/User";
import { getRepository } from "typeorm";

// Setup introduction.
import { Intro } from "../../shared/util/intro";
import { ɵLOCALE_DATA, LOCALE_ID } from "@angular/core";
import db from "./db/db";
const intro = new Intro();

// Server configuration
import config from "../../../config.json";
import TwingEngine from "./twig/TwingEngine";

// Start connection to the database and then start the server.
createConnection().then(async connection => {

    // Share the database connection
    db.connection = connection;

    // Synchronize
    await connection.synchronize();
    const app = express();

    // Setup use
    passport.use(new passport_local.Strategy(async (username, password, done) => {
        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail({ where: { username } });

            if (!user || !user.checkIfUnencryptedPasswordIsValid(password)) {
                // tslint:disable-next-line: no-null-keyword
                return done(new Error("password is invalid"));
            }

            // tslint:disable-next-line: no-null-keyword
            return done(null, user);
        } catch (error) {
            console.log(error);
            return done(error);
        }
    }));

    // Setup deserializedUser
    passport.deserializeUser(async function (id, cb) {
        const userRepository = getRepository(User);
        let user: User;
        // @ts-ignore
        try {
            user = await userRepository.findOneOrFail({ where: { id } });
        } catch (err) {
            cb(err);
        }
        // tslint:disable-next-line: no-null-keyword
        cb(null, user);
    });

    // Setup serializedUser
    passport.serializeUser(function (user: User, cb) {
        // tslint:disable-next-line: no-null-keyword
        cb(null, user.id);
    });

    // Call midlewares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json({
        type: ['json', 'application/csp-report']
    }));

    // Report violation!
    app.post('/report-violation', (req, res) => {
        if (req.body) {
            console.log('[INFO] - CSP Violation: ', req.body)
        } else {
            console.log('[INFO] - CSP Violation: No data received!')
        }
        
        res.status(204).end()
    })

    // Create nonces
    const uuidv4 = require('uuid/v4');
    app.use(function (req, res, next) {
        res.locals.nonce = uuidv4()
        //console.log("[INFO] - Set the UUID for nonce to: " + res.locals.nonce);
        next()
    })

    // LOGGER / EXPRESS JSON / URLENCODING
    app.use(logger("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // CSRF Protection
    const csrfProtection = csrf({ cookie: true });
    app.use(cookieParser("terraformer-tiger-secret", {}));

    // Sass middleware
    app.use(sassMiddleware({
        src: path.join(__dirname, "../../../public"),
        dest: path.join(__dirname, "../../../public"),
        indentedSyntax: true // true = .sass and false = .scss
    }));

    // Create a session and then add passport to it.
    app.use(
        session(
            {
                secret: "terraformer-tiger-secret",
                cookie: { maxAge: 60000 },
                resave: false,
                saveUninitialized: false
            }
        )
    );
    
    
    app.use(passport.initialize());
    app.use(passport.session());

    // Load static files from the server.
    app.use(express.static(path.join(__dirname, "../../../../public")));

    // View engine
    app.set('views', path.join(__dirname, '../../../../html', config.theme)); // general config
    app.set('view engine', 'ejs');

    // Index
    app.use("/", routes);

    // Catch 404 and forward to error handler
    app.use((req: Request, res: Response, next: any) => {
        next(createError(404));
    });

    // error handler
    app.use((err: any, req: Request, res: Response, next: any) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get("env") === "development" ? err : {};

        // render the error page
        res.status(err.status || 500);

        // Render error page.
        const twingEngine = new TwingEngine();
        twingEngine.render("error.twig", {
            title: "Forgiveness Online Webinar - Error",
            cachebust: ("v=" + +new Date)
        }).then((output) => {
            res.send(output);
        }).catch((err) => {
            res.send(err.toString());
        });
    });

    // Savely run script in HTML
    app.use(function (req, res) {
        res.end(`<script nonce="${res.locals.nonce}">alert(1 + 1);</script>`)
    });

    // Set port
    const port = process.env.PORT || 3000;
    http.createServer(app).listen(port, () => {
        intro.show("think1st", () => {
            console.log("Server Running on http://localhost:" + port);
        });
    });

}).catch(error => console.log(error));