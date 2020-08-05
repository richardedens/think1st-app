import express from "express";
// import * as passport from "passport";
import LanguageController from "../controllers/LanguageController";
// import * as loginCheck from "connect-ensure-login";

const router = express.Router();

/* GET home page. */
router.get("/nl", LanguageController.nl);
router.get("/en", LanguageController.en);
router.get("/da", LanguageController.da);
router.get("/de", LanguageController.de);
router.get("/fr", LanguageController.fr);
router.get("/es", LanguageController.es);
router.get("/fa", LanguageController.fa);
router.get("/ar", LanguageController.ar);
router.get("/po", LanguageController.po);

export default router;
