import { Request, Response } from "express";
import TwingEngine from "../twig/TwingEngine";
import Lang from "./components/Lang";
import config from "../../../../config.json";

// Readout the projects from the project folder.
import fs from "fs";
import path from "path";


class DashboardController {

    static show = async (req: Request, res: Response) => {
        const twingEngine = new TwingEngine();
        const loggedin = req.session.loggedin || false;

        // Get the projects from the folder.
        fs.readdir(path.join(__dirname,"/../../../../../projects/"), (err, projects) => {
            
            // Sanitize project database files.
            let projectNames = [];
            projects.forEach((project) => {
                if (project !== "README.md") {
                    projectNames.push(project.replace(".db", ""));
                }
            })

            twingEngine.render("dashboard.twig", {
                title: "Think1st - Dashboard",
                pageid: "dashboard",
                cachebust: ("v=" + +new Date),
                nonce: res.locals.nonce,
                loggedin: loggedin,
                currentLanguage: Lang.getLanguageDescription((req.session.lang) ? req.session.lang : "en"),
                lang: (req.session.lang) ? req.session.lang : "en",
                environment: config.environment,
                projects: projectNames
            }).then((output) => {
                res.send(output);
            }).catch((err) => {
                res.send(err.toString());
            });

        });
        
    };
}

export default DashboardController;