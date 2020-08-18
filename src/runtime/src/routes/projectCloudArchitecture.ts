import express from "express";
import ProjectController from "../controllers/ProjectController";
import * as loginCheck from "connect-ensure-login";

const router = express.Router();

/* GET home page. */
router.get("/:projectName", loginCheck.ensureLoggedIn({ redirectTo: "/signin" }), ProjectController.cloud);

export default router;
