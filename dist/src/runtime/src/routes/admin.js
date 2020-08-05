"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var connect_ensure_login_1 = __importDefault(require("connect-ensure-login"));
var Lang_1 = __importDefault(require("../controllers/components/Lang"));
var TwingEngine_1 = __importDefault(require("../twig/TwingEngine"));
var router = express_1.default.Router();
/* GET home page. */
router.get("/", connect_ensure_login_1.default.ensureLoggedIn({ redirectTo: "/signin" }), function (req, res, next) {
    var twingEngine = new TwingEngine_1.default();
    var loggedin = req.session.loggedin || false;
    twingEngine.render("admin/admin.twig", {
        title: "Forgiveness Online Webinar - Home",
        cachebust: ("v=" + +new Date),
        nonce: res.locals.nonce,
        loggedin: loggedin,
        currentLanguage: Lang_1.default.getLanguageDescription((req.session.lang) ? req.session.lang : "nl"),
        lang: (req.session.lang) ? req.session.lang : "nl"
    }).then(function (output) {
        res.send(output);
    }).catch(function (err) {
        res.send(err.toString());
    });
});
exports.default = router;
//# sourceMappingURL=admin.js.map