import { Request, Response } from "express";
import TwingEngine from "../twig/TwingEngine";
import Lang from "./components/Lang";
import config from "../../../../config.json";

class MindmapController {

    static show = async (req: Request, res: Response) => {
        const twingEngine = new TwingEngine();
        const loggedin = req.session.loggedin || false;
        twingEngine.render("mindmap.twig", {
            title: "Think1st - MindmapController",
            pageid: "mindmap",
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

export default MindmapController;