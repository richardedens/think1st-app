import { Request, Response } from "express";
import Lang from "./components/Lang";

class LanguageController {

    static nl = (req: Request, res: Response) => {
        req.session.lang = "nl";
        req.session.save((err) => {
            res.redirect(req.header('Referrer'));
        });
    };

    static en = (req: Request, res: Response) => {
        req.session.lang = "en";
        req.session.save((err) => {
            res.redirect(req.header('Referrer'));
        });
    };

    static fr = (req: Request, res: Response) => {
        req.session.lang = "fr";
        req.session.save((err) => {
            res.redirect(req.header('Referrer'));
        });

    };

    static de = (req: Request, res: Response) => {
        req.session.lang = "de";
        req.session.save((err) => {
            res.redirect(req.header('Referrer'));
        });

    };

    static da = (req: Request, res: Response) => {
        req.session.lang = "da";
        req.session.save((err) => {
            res.redirect(req.header('Referrer'));
        });

    };

    static es = (req: Request, res: Response) => {
        req.session.lang = "es";
        req.session.save((err) => {
            res.redirect(req.header('Referrer'));
        });

    };

    static ar = (req: Request, res: Response) => {
        req.session.lang = "ar";
        req.session.save((err) => {
            res.redirect(req.header('Referrer'));
        });
    };

    static fa = (req: Request, res: Response) => {
        req.session.lang = "fa";
        req.session.save((err) => {
            res.redirect(req.header('Referrer'));
        });
    };

    static po = (req: Request, res: Response) => {
        req.session.lang = "po";
        req.session.save((err) => {
            res.redirect(req.header('Referrer'));
        });

    };
}

export default LanguageController;