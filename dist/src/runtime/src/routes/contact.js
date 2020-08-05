"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ContactController_1 = __importDefault(require("../controllers/ContactController"));
var router = express_1.default.Router();
/* GET home page. */
router.get("/", ContactController_1.default.show);
exports.default = router;
//# sourceMappingURL=contact.js.map