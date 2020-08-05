"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ForgivenessController_1 = __importDefault(require("../controllers/ForgivenessController"));
var router = express_1.default.Router();
/* GET home page. */
router.get("/", ForgivenessController_1.default.show);
exports.default = router;
//# sourceMappingURL=forgiveness.js.map