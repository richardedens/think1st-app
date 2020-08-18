import express from "express";
import MindmapController from "../controllers/MindmapController";
import * as loginCheck from "connect-ensure-login";

const router = express.Router();

/* GET home page. */
router.get("/:projectName", loginCheck.ensureLoggedIn({ redirectTo: "/signin" }), MindmapController.show);

export default router;
