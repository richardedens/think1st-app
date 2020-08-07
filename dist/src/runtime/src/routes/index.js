"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var homepage_1 = __importDefault(require("./homepage"));
var projectCreate_1 = __importDefault(require("./projectCreate"));
var projectDetail_1 = __importDefault(require("./projectDetail"));
var projectEdit_1 = __importDefault(require("./projectEdit"));
var mindmap_1 = __importDefault(require("./mindmap"));
var dashboard_1 = __importDefault(require("./dashboard"));
var kanbanboard_1 = __importDefault(require("./kanbanboard"));
var signin_1 = __importDefault(require("./signin"));
var signup_1 = __importDefault(require("./signup"));
var logout_1 = __importDefault(require("./logout"));
var lang_1 = __importDefault(require("./lang"));
var label_1 = __importDefault(require("./label"));
// Mendix API
var mendix_1 = __importDefault(require("./api/v1/mendix"));
// Tea API
var tea_1 = __importDefault(require("./api/v1/tea"));
var routes = express_1.Router();
// API
routes.use("/api/v1/mendix", mendix_1.default);
routes.use("/api/v1/tea", tea_1.default);
// Page
routes.use("/", homepage_1.default);
routes.use("/dashboard", dashboard_1.default);
routes.use("/mindmap", mindmap_1.default);
routes.use("/kanbanboard", kanbanboard_1.default);
routes.use("/project-create", projectCreate_1.default);
routes.use("/project-detail", projectDetail_1.default);
routes.use("/project-edit", projectEdit_1.default);
routes.use("/signin", signin_1.default);
routes.use("/signup", signup_1.default);
routes.use("/logout", logout_1.default);
routes.use("/lang", lang_1.default);
routes.use("/label/save", label_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map