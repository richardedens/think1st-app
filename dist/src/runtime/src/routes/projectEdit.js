"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import * as passport from "passport";
var ProjectController_1 = __importDefault(require("../controllers/ProjectController"));
var loginCheck = __importStar(require("connect-ensure-login"));
var router = express_1.default.Router();
/* GET home page. */
router.get("/", loginCheck.ensureLoggedIn({ redirectTo: "/signin" }), ProjectController_1.default.edit);
exports.default = router;
//# sourceMappingURL=projectEdit.js.map