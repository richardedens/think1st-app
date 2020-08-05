"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("../db/db"));
var Label_1 = require("../entity/Label");
var router = express_1.default.Router();
var isAuthenticated = function (req, res, next) {
    if (req.user)
        return next();
    res.redirect('/');
};
router.post("/", isAuthenticated, function (req, res) {
    var repository = db_1.default.connection.getRepository(Label_1.Label);
    console.log("[LABEL] # Trying to find: " + req.body.id);
    repository.findOne({ name: req.body.id }).then(function (label) {
        var lang = (req.session.lang) ? req.session.lang : "nl";
        switch (lang) {
            case "nl":
                console.log("[LABEL] # Trying to set content to NL: " + req.body.content);
                label.nl = req.body.content;
                break;
            case "en":
                console.log("[LABEL] # Trying to set content to EN: " + req.body.content);
                label.en = req.body.content;
                break;
            case "da":
                console.log("[LABEL] # Trying to set content to DA: " + req.body.content);
                label.da = req.body.content;
                break;
            case "de":
                console.log("[LABEL] # Trying to set content to DE: " + req.body.content);
                label.de = req.body.content;
                break;
            case "ar":
                console.log("[LABEL] # Trying to set content to AR: " + req.body.content);
                label.ar = req.body.content;
                break;
            case "fa":
                console.log("[LABEL] # Trying to set content to FA: " + req.body.content);
                label.fa = req.body.content;
                break;
            case "po":
                console.log("[LABEL] # Trying to set content to PO: " + req.body.content);
                label.po = req.body.content;
                break;
            case "es":
                console.log("[LABEL] # Trying to set content to ES: " + req.body.content);
                label.es = req.body.connect;
                break;
            default:
                console.log("[LABEL] # Trying to set content to NL: " + req.body.content);
                label.nl = req.body.content;
                break;
        }
        db_1.default.connection.getRepository(Label_1.Label).save(label);
        console.log("[LABEL] # Saved content");
        res.json({ success: true });
    }).catch(function () {
        res.json({ success: true });
    });
});
exports.default = router;
//# sourceMappingURL=label.js.map