import express from "express";
// import * as passport from "passport";
import SignupController from "../controllers/SignupController";
// import * as loginCheck from "connect-ensure-login";

const router = express.Router();

/* GET home page. */
router.get("/", SignupController.show);

export default router;
