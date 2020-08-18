import express from "express";
// import * as passport from "passport";
import KanbanboardController from "../controllers/KanbanboardController";
import * as loginCheck from "connect-ensure-login";

const router = express.Router();

/* GET home page. */
router.get("/:projectName", loginCheck.ensureLoggedIn({ redirectTo: "/signin" }), KanbanboardController.show);

export default router;
