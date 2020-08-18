import express from "express";
// import * as passport from "passport";
import ArchitectController from "../controllers/ArchitectController";
import * as loginCheck from "connect-ensure-login";

const router = express.Router();

/* GET home page. */
router.get("/:projectName", loginCheck.ensureLoggedIn({ redirectTo: "/signin" }), ArchitectController.show);

export default router;
