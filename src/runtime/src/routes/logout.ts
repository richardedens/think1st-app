import { Request, Response } from "express";
import express from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    console.log("[SESSION] # setting loggedin to false");
    req.logout();
    req.session.loggedin = null;
    req.session.save((err) => {
        console.log("[SESSION] # saving the session");
        res.redirect("/");
    });
});

export default router;