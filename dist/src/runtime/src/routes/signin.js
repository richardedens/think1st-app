"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var SignInController_1 = __importDefault(require("../controllers/SignInController"));
var passport_1 = __importDefault(require("passport"));
var router = express_1.default.Router();
/* GET home page. */
router.get("/", SignInController_1.default.show);
router.post("/", passport_1.default.authenticate("local", { failureRedirect: "/signin" }), function (req, res) {
    console.log("test");
    req.session.loggedin = true;
    req.session.save(function (err) {
        res.redirect("/dashboard");
    });
});
exports.default = router;
//# sourceMappingURL=signin.js.map