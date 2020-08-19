import express from "express";
// import * as passport from "passport";
import ProjectController from "../controllers/ProjectController";
import * as loginCheck from "connect-ensure-login";

const router = express.Router();

/* GET home page. */
router.get("/:projectName", loginCheck.ensureLoggedIn({ redirectTo: "/signin" }), ProjectController.security);

export default router;
