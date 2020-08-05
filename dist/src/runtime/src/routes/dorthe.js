"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var OfficersController_1 = __importDefault(require("../controllers/OfficersController"));
var router = express_1.default.Router();
/* GET home page. */
router.get("/", OfficersController_1.default.dorthe);
exports.default = router;
//# sourceMappingURL=dorthe.js.map