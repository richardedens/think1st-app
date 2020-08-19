import { Request, Response } from "express";
import TwingEngine from "../twig/TwingEngine";
import Lang from "./components/Lang";
import config from "../../../../config.json";

import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "../projectentity/User";
import { Project } from "../projectentity/Project";
import { Team } from "../projectentity/Team";
import { TeaModule } from "../projectentity/TeaModule";
import { TeaScript } from "../projectentity/TeaScript";
import fs from "fs";
import path from "path";

class ProjectController {

    static delete = async (req: Request, res: Response) => {
        
        // Get the projects from the folder.
        if (fs.existsSync(path.join(__dirname,"/../../../../../projects/", req.params.projectName + ".db"))) {
            fs.unlinkSync(path.join(__dirname,"/../../../../../projects/", req.params.projectName + ".db"));
            res.redirect('/dashboard');
        } else {
            res.redirect('/dashboard');
        }

    }

    static create = async (req: Request, res: Response) => {

        // Sanatizing project name to project file name.
        console.log(req.body);

        let projectFile = req.body.projectname;
        projectFile = projectFile.toLowerCase().replace(/\W+/g, " ").split(" ").join("_");

        // Save both the project file and project name.
        req.session.projectFile = projectFile;
        req.session.projectName = req.params.projectName;
        req.session.save((err) => {

            // @ts-ignore
            let conn = createConnection({
                "name": projectFile,
                "type": "sqlite",
                "database": "projects/" + projectFile + ".db",
                "synchronize": true,
                "logging": false,
                "entities": [
                    User,
                    Project,
                    Team,
                    TeaModule,
                    TeaScript,
                ],
            }).then(connection => {
                // here you can start to work with your entities
                console.log('[DBSYSTEM] - Created project database: projects/' + projectFile + ".db - for project " + req.params.projectName);
                
                // Close connection
                connection.close();

                res.redirect("/dashboard");
            }).catch((error) => {
                console.log(error);
                res.redirect("/dashboard");
            });
            
        });

    }

    static show = async (req: Request, res: Response) => {
        res.set('Cache-Control', 'no-store');

        // Get if we are logged in or not
        const twingEngine = new TwingEngine();
        const loggedin = req.session.loggedin || false;

        console.log("[PROJECT] - " + req.params.projectName);

        // Render the projects
        twingEngine.render("project-create.twig", {
            title: "Think1st - Platform",
            pageid: "projects",
            cachebust: ("v=" + +new Date),
            nonce: res.locals.nonce,
            loggedin: loggedin,
            currentLanguage: Lang.getLanguageDescription((req.session.lang) ? req.session.lang : "en"),
            lang: (req.session.lang) ? req.session.lang : "en",
            page: 'projects',
            environment: config.environment,
            project: req.params.projectName
        }).then((output) => {
            res.send(output);
        }).catch((err) => {
            res.send(err.toString());
        });

    };

    
    static design = async (req: Request, res: Response) => {
        res.set('Cache-Control', 'no-store');

        // Get if we are logged in or not
        const twingEngine = new TwingEngine();
        const loggedin = req.session.loggedin || false;

        // Render the projects
        twingEngine.render("project-design.twig", {
            title: "Think1st - Platform",
            pageid: "projects",
            cachebust: ("v=" + +new Date),
            nonce: res.locals.nonce,
            loggedin: loggedin,
            currentLanguage: Lang.getLanguageDescription((req.session.lang) ? req.session.lang : "en"),
            lang: (req.session.lang) ? req.session.lang : "en",
            page: 'projects',
            environment: config.environment,
            project: req.params.projectName
        }).then((output) => {
            res.send(output);
        }).catch((err) => {
            res.send(err.toString());
        });

    };

    static database = async (req: Request, res: Response) => {
        res.set('Cache-Control', 'no-store');

        // Get if we are logged in or not
        const twingEngine = new TwingEngine();
        const loggedin = req.session.loggedin || false;

        // Render the projects
        twingEngine.render("project-database.twig", {
            title: "Think1st - Platform",
            pageid: "projects",
            cachebust: ("v=" + +new Date),
            nonce: res.locals.nonce,
            loggedin: loggedin,
            currentLanguage: Lang.getLanguageDescription((req.session.lang) ? req.session.lang : "en"),
            lang: (req.session.lang) ? req.session.lang : "en",
            page: 'projects',
            environment: config.environment,
            project: req.params.projectName
        }).then((output) => {
            res.send(output);
        }).catch((err) => {
            res.send(err.toString());
        });

    };

    static settings = async (req: Request, res: Response) => {
        res.set('Cache-Control', 'no-store');

        // Get if we are logged in or not
        const twingEngine = new TwingEngine();
        const loggedin = req.session.loggedin || false;

        // Render the projects
        twingEngine.render("project-settings.twig", {
            title: "Think1st - Platform",
            pageid: "projects",
            cachebust: ("v=" + +new Date),
            nonce: res.locals.nonce,
            loggedin: loggedin,
            currentLanguage: Lang.getLanguageDescription((req.session.lang) ? req.session.lang : "en"),
            lang: (req.session.lang) ? req.session.lang : "en",
            page: 'projects',
            environment: config.environment,
            project: req.params.projectName
        }).then((output) => {
            res.send(output);
        }).catch((err) => {
            res.send(err.toString());
        });

    };

    static cloud = async (req: Request, res: Response) => {
        res.set('Cache-Control', 'no-store');

        // Get if we are logged in or not
        const twingEngine = new TwingEngine();
        const loggedin = req.session.loggedin || false;

        // Render the projects
        twingEngine.render("project-cloud-architecture.twig", {
            title: "Think1st - Platform",
            pageid: "projects",
            cachebust: ("v=" + +new Date),
            nonce: res.locals.nonce,
            loggedin: loggedin,
            currentLanguage: Lang.getLanguageDescription((req.session.lang) ? req.session.lang : "en"),
            lang: (req.session.lang) ? req.session.lang : "en",
            page: 'projects',
            environment: config.environment,
            project: req.params.projectName
        }).then((output) => {
            res.send(output);
        }).catch((err) => {
            res.send(err.toString());
        });

    };

    static detail = async (req: Request, res: Response) => {
        const twingEngine = new TwingEngine();
        const loggedin = req.session.loggedin || false;
        twingEngine.render("project-detail.twig", {
            title: "Think1st - Platform",
            pageid: "projectdetail",
            cachebust: ("v=" + +new Date),
            nonce: res.locals.nonce,
            loggedin: loggedin,
            currentLanguage: Lang.getLanguageDescription((req.session.lang) ? req.session.lang : "en"),
            lang: (req.session.lang) ? req.session.lang : "en",
            environment: config.environment,
            project: req.params.projectName
        }).then((output) => {
            res.send(output);
        }).catch((err) => {
            res.send(err.toString());
        });
    };

    static edit = async (req: Request, res: Response) => {
        const twingEngine = new TwingEngine();
        const loggedin = req.session.loggedin || false;

        console.log("[PROJECT] - " + req.params.projectName);

        twingEngine.render("project-edit.twig", {
            title: "Think1st - Platform",
            pageid: "projectedit",
            cachebust: ("v=" + +new Date),
            nonce: res.locals.nonce,
            loggedin: loggedin,
            currentLanguage: Lang.getLanguageDescription((req.session.lang) ? req.session.lang : "en"),
            lang: (req.session.lang) ? req.session.lang : "en",
            environment: config.environment,
            project: req.params.projectName
        }).then((output) => {
            res.send(output);
        }).catch((err) => {
            res.send(err.toString());
        });
    };

    static security = async (req: Request, res: Response) => {
        const twingEngine = new TwingEngine();
        const loggedin = req.session.loggedin || false;

        console.log("[PROJECT] - " + req.params.projectName);
        
        twingEngine.render("project-security.twig", {
            title: "Think1st - Platform",
            pageid: "projectedit",
            cachebust: ("v=" + +new Date),
            nonce: res.locals.nonce,
            loggedin: loggedin,
            currentLanguage: Lang.getLanguageDescription((req.session.lang) ? req.session.lang : "en"),
            lang: (req.session.lang) ? req.session.lang : "en",
            environment: config.environment,
            project: req.params.projectName
        }).then((output) => {
            res.send(output);
        }).catch((err) => {
            res.send(err.toString());
        });
    };
}

export default ProjectController;