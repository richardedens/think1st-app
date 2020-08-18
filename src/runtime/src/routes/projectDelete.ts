import express from "express";
// import * as passport from "passport";
import ProjectController from "../controllers/ProjectController";
import * as loginCheck from "connect-ensure-login";

/* Setup routers */
const router = express.Router();

/* GET home page. */
router.get("/:projectname", loginCheck.ensureLoggedIn({ redirectTo: "/signin" }), ProjectController.delete);

export default router;
