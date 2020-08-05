"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var router = express.Router();
/* GET home page. */
router.get("/projects/", function (req, res, next) {
    res.json({ success: true });
});
/* GET home page. */
router.get("/", function (req, res, next) {
    res.json({ success: true });
});
exports.default = router;
//# sourceMappingURL=mendix.js.map