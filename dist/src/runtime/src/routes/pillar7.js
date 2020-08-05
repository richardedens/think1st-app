"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var WorkshopsController_1 = __importDefault(require("../controllers/WorkshopsController"));
var router = express_1.default.Router();
/* GET home page. */
router.get("/", WorkshopsController_1.default.pillar7);
exports.default = router;
//# sourceMappingURL=pillar7.js.map