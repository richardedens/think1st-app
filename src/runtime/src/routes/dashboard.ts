import express from "express";
import DashboardController from "../controllers/DashboardController";
import * as loginCheck from "connect-ensure-login";

const router = express.Router();

/* GET home page. */
router.get("/", loginCheck.ensureLoggedIn({ redirectTo: "/signin" }), DashboardController.show);

export default router;
