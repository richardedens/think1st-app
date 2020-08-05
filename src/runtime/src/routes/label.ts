import express from "express";
import SignInController from "../controllers/SignInController";
import { Request, Response } from "express";
import passport from "passport";
import db from "../db/db";
import { Label } from "../entity/Label";

const router = express.Router();

const isAuthenticated = (req, res, next) => {
    if (req.user)
        return next();
    res.redirect('/');
}

router.post("/", isAuthenticated, (req: Request, res: Response) => {
    
    const repository = db.connection.getRepository(Label);

    console.log("[LABEL] # Trying to find: " + req.body.id);

    repository.findOne({ name: req.body.id }).then((label: Label) => {

        const lang = (req.session.lang) ? req.session.lang : "nl";

        switch(lang) {
            case "nl":
                console.log("[LABEL] # Trying to set content to NL: " + req.body.content);
                label.nl = req.body.content;
                break;
            case "en":
                console.log("[LABEL] # Trying to set content to EN: " + req.body.content);
                label.en = req.body.content;
                break;
            case "da":
                console.log("[LABEL] # Trying to set content to DA: " + req.body.content);
                label.da = req.body.content;
                break;
            case "de":
                console.log("[LABEL] # Trying to set content to DE: " + req.body.content);
                label.de = req.body.content;
                break;
            case "ar":
                console.log("[LABEL] # Trying to set content to AR: " + req.body.content);
                label.ar = req.body.content;
                break;
            case "fa":
                console.log("[LABEL] # Trying to set content to FA: " + req.body.content);
                label.fa = req.body.content;
                break;
            case "po":
                console.log("[LABEL] # Trying to set content to PO: " + req.body.content);
                label.po = req.body.content;
                break;
            case "es":
                console.log("[LABEL] # Trying to set content to ES: " + req.body.content);
                label.es = req.body.connect;
                break;
            default:
                console.log("[LABEL] # Trying to set content to NL: " + req.body.content);
                label.nl = req.body.content;
                break;
        }

        db.connection.getRepository(Label).save(label);

        console.log("[LABEL] # Saved content");

        res.json({ success: true });
    }).catch(() => {
        res.json({ success: true });
    });

});


export default router;
