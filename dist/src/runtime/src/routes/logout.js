"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get("/", function (req, res) {
    console.log("[SESSION] # setting loggedin to false");
    req.session.loggedin = null;
    req.session.save(function (err) {
        console.log("[SESSION] # saving the session");
        res.redirect(req.header('Referrer'));
    });
});
exports.default = router;
//# sourceMappingURL=logout.js.map