"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import * as passport from "passport";
var LanguageController_1 = __importDefault(require("../controllers/LanguageController"));
// import * as loginCheck from "connect-ensure-login";
var router = express_1.default.Router();
/* GET home page. */
router.get("/nl", LanguageController_1.default.nl);
router.get("/en", LanguageController_1.default.en);
router.get("/da", LanguageController_1.default.da);
router.get("/de", LanguageController_1.default.de);
router.get("/fr", LanguageController_1.default.fr);
router.get("/es", LanguageController_1.default.es);
router.get("/fa", LanguageController_1.default.fa);
router.get("/ar", LanguageController_1.default.ar);
router.get("/po", LanguageController_1.default.po);
exports.default = router;
//# sourceMappingURL=lang.js.map