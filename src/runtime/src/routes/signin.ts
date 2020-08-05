import express from "express";
import SignInController from "../controllers/SignInController";
import { Request, Response } from "express";
import passport from "passport";

const router = express.Router();

/* GET home page. */
router.get("/", SignInController.show);

router.post("/", passport.authenticate("local", { failureRedirect: "/signin" }), (req: Request, res: Response) => {
    console.log("test");
    req.session.loggedin = true;
    req.session.save((err) => {
        res.redirect("/dashboard");
    });
});

export default router;
