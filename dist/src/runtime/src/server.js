"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
// Setup server.
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var express_1 = __importDefault(require("express"));
var express_session_1 = __importDefault(require("express-session"));
var http_1 = __importDefault(require("http"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var body_parser_1 = __importDefault(require("body-parser"));
var http_errors_1 = __importDefault(require("http-errors"));
var path_1 = __importDefault(require("path"));
var morgan_1 = __importDefault(require("morgan"));
var node_sass_middleware_1 = __importDefault(require("node-sass-middleware"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var csurf_1 = __importDefault(require("csurf"));
var routes_1 = __importDefault(require("./routes"));
var open_1 = __importDefault(require("open"));
// Setup passport.
var passport_1 = __importDefault(require("passport"));
var passport_local_1 = __importDefault(require("passport-local"));
var User_1 = __importDefault(require("./entity/User"));
var typeorm_2 = require("typeorm");
// Setup introduction.
var intro_1 = require("../../shared/util/intro");
var db_1 = __importDefault(require("./db/db"));
var intro = new intro_1.Intro();
// Server configuration
var config_json_1 = __importDefault(require("../../../config.json"));
var TwingEngine_1 = __importDefault(require("./twig/TwingEngine"));
// Start connection to the database and then start the server.
typeorm_1.createConnection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
    var app, uuidv4, csrfProtection, port;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // Share the database connection
                db_1.default.connection = connection;
                // Synchronize
                return [4 /*yield*/, connection.synchronize()];
            case 1:
                // Synchronize
                _a.sent();
                app = express_1.default();
                // Setup use
                passport_1.default.use(new passport_local_1.default.Strategy(function (username, password, done) { return __awaiter(_this, void 0, void 0, function () {
                    var userRepository, user, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                userRepository = typeorm_2.getRepository(User_1.default);
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, userRepository.findOneOrFail({ where: { username: username } })];
                            case 2:
                                user = _a.sent();
                                if (!user || !user.checkIfUnencryptedPasswordIsValid(password)) {
                                    // tslint:disable-next-line: no-null-keyword
                                    return [2 /*return*/, done(new Error("password is invalid"))];
                                }
                                // tslint:disable-next-line: no-null-keyword
                                return [2 /*return*/, done(null, user)];
                            case 3:
                                error_1 = _a.sent();
                                console.log(error_1);
                                return [2 /*return*/, done(error_1)];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); }));
                // Setup deserializedUser
                passport_1.default.deserializeUser(function (id, cb) {
                    return __awaiter(this, void 0, void 0, function () {
                        var userRepository, user, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    userRepository = typeorm_2.getRepository(User_1.default);
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, userRepository.findOneOrFail({ where: { id: id } })];
                                case 2:
                                    user = _a.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    err_1 = _a.sent();
                                    cb(err_1);
                                    return [3 /*break*/, 4];
                                case 4:
                                    // tslint:disable-next-line: no-null-keyword
                                    cb(null, user);
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                // Setup serializedUser
                passport_1.default.serializeUser(function (user, cb) {
                    // tslint:disable-next-line: no-null-keyword
                    cb(null, user.id);
                });
                // Call midlewares
                app.use(cors_1.default());
                app.use(helmet_1.default());
                app.use(body_parser_1.default.json({
                    type: ['json', 'application/csp-report']
                }));
                // Report violation!
                app.post('/report-violation', function (req, res) {
                    if (req.body) {
                        console.log('[INFO] - CSP Violation: ', req.body);
                    }
                    else {
                        console.log('[INFO] - CSP Violation: No data received!');
                    }
                    res.status(204).end();
                });
                uuidv4 = require('uuid/v4');
                app.use(function (req, res, next) {
                    res.locals.nonce = uuidv4();
                    //console.log("[INFO] - Set the UUID for nonce to: " + res.locals.nonce);
                    next();
                });
                // LOGGER / EXPRESS JSON / URLENCODING
                app.use(morgan_1.default("dev"));
                app.use(express_1.default.json());
                app.use(express_1.default.urlencoded({ extended: false }));
                csrfProtection = csurf_1.default({ cookie: true });
                app.use(cookie_parser_1.default("think1st-app", {}));
                // Sass middleware
                app.use(node_sass_middleware_1.default({
                    src: path_1.default.join(__dirname, "../../../public"),
                    dest: path_1.default.join(__dirname, "../../../public"),
                    indentedSyntax: true // true = .sass and false = .scss
                }));
                // Create a session and then add passport to it.
                app.use(express_session_1.default({
                    secret: "think1st-app",
                    cookie: { maxAge: 60000 },
                    resave: false,
                    saveUninitialized: false
                }));
                app.use(passport_1.default.initialize());
                app.use(passport_1.default.session());
                // Load static files from the server.
                app.use(express_1.default.static(path_1.default.join(__dirname, "../../../../public")));
                // View engine
                app.set('views', path_1.default.join(__dirname, '../../../../html', config_json_1.default.theme)); // general config
                app.set('view engine', 'ejs');
                // Index
                app.use("/", routes_1.default);
                // Catch 404 and forward to error handler
                app.use(function (req, res, next) {
                    next(http_errors_1.default(404));
                });
                // error handler
                app.use(function (err, req, res, next) {
                    // set locals, only providing error in development
                    res.locals.message = err.message;
                    res.locals.error = req.app.get("env") === "development" ? err : {};
                    // render the error page
                    res.status(err.status || 500);
                    // Render error page.
                    var twingEngine = new TwingEngine_1.default();
                    twingEngine.render("error.twig", {
                        title: "Forgiveness Online Webinar - Error",
                        cachebust: ("v=" + +new Date)
                    }).then(function (output) {
                        res.send(output);
                    }).catch(function (err) {
                        res.send(err.toString());
                    });
                });
                // Savely run script in HTML
                app.use(function (req, res) {
                    res.end("<script nonce=\"" + res.locals.nonce + "\">alert(1 + 1);</script>");
                });
                port = process.env.PORT || 3000;
                http_1.default.createServer(app).listen(port, function () {
                    intro.show("think1st", function () {
                        console.log("Server Running on http://localhost:" + port);
                        // Open default webbrowser.
                        open_1.default("http://localhost:" + port);
                    });
                });
                return [2 /*return*/];
        }
    });
}); }).catch(function (error) { return console.log(error); });
//# sourceMappingURL=server.js.map