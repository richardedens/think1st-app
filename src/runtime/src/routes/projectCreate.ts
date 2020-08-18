import express from "express";
// import * as passport from "passport";
import ProjectController from "../controllers/ProjectController";
import * as loginCheck from "connect-ensure-login";

// CSRF
import csrf from 'csurf';
import bodyParser from 'body-parser';

let csrfProtection = csrf({ cookie: true });

/* Setup routers */
const router = express.Router();

/* GET home page. */
router.get("/", loginCheck.ensureLoggedIn({ redirectTo: "/signin" }), ProjectController.show);

router.post("/", loginCheck.ensureLoggedIn({ redirectTo: "/signin" }), ProjectController.create);

export default router;
