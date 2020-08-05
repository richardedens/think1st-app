import { Request, Response } from "express";
import TwingEngine from "../twig/TwingEngine";
import Lang from "./components/Lang";
import config from "../../../../config.json";

class ProjectController {

    static show = async (req: Request, res: Response) => {
        res.set('Cache-Control', 'no-store');
        const twingEngine = new TwingEngine();
        const loggedin = req.session.loggedin || false;
        twingEngine.render("project-create.twig", {
            title: "Think1st - Platform",
            pageid: "projects",
            cachebust: ("v=" + +new Date),
            nonce: res.locals.nonce,
            loggedin: loggedin,
            currentLanguage: Lang.getLanguageDescription((req.session.lang) ? req.session.lang : "en"),
            lang: (req.session.lang) ? req.session.lang : "en",
            page: 'projects',
            environment: config.environment
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
            environment: config.environment
        }).then((output) => {
            res.send(output);
        }).catch((err) => {
            res.send(err.toString());
        });
    };

    static edit = async (req: Request, res: Response) => {
        const twingEngine = new TwingEngine();
        const loggedin = req.session.loggedin || false;
        twingEngine.render("project-edit.twig", {
            title: "Think1st - Platform",
            pageid: "projectedit",
            cachebust: ("v=" + +new Date),
            nonce: res.locals.nonce,
            loggedin: loggedin,
            currentLanguage: Lang.getLanguageDescription((req.session.lang) ? req.session.lang : "en"),
            lang: (req.session.lang) ? req.session.lang : "en",
            environment: config.environment
        }).then((output) => {
            res.send(output);
        }).catch((err) => {
            res.send(err.toString());
        });
    };
}

export default ProjectController;