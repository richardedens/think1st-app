"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var homepage_1 = __importDefault(require("./homepage"));
var projectDelete_1 = __importDefault(require("./projectDelete"));
var projectCreate_1 = __importDefault(require("./projectCreate"));
var projectDetail_1 = __importDefault(require("./projectDetail"));
var projectDesign_1 = __importDefault(require("./projectDesign"));
var projectSecurity_1 = __importDefault(require("./projectSecurity"));
var projectDatabase_1 = __importDefault(require("./projectDatabase"));
var projectSettings_1 = __importDefault(require("./projectSettings"));
var projectEdit_1 = __importDefault(require("./projectEdit"));
var projectCloudArchitecture_1 = __importDefault(require("./projectCloudArchitecture"));
var mindmap_1 = __importDefault(require("./mindmap"));
var dashboard_1 = __importDefault(require("./dashboard"));
var kanbanboard_1 = __importDefault(require("./kanbanboard"));
var architect_1 = __importDefault(require("./architect"));
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
routes.use("/architect", architect_1.default);
routes.use("/mindmap", mindmap_1.default);
routes.use("/kanbanboard", kanbanboard_1.default);
routes.use("/project-create", projectCreate_1.default);
routes.use("/project-database", projectDatabase_1.default);
routes.use("/project-security", projectSecurity_1.default);
routes.use("/project-detail", projectDetail_1.default);
routes.use("/project-design", projectDesign_1.default);
routes.use("/project-edit", projectEdit_1.default);
routes.use("/project-delete", projectDelete_1.default);
routes.use("/project-settings", projectSettings_1.default);
routes.use("/project-cloud-architecture", projectCloudArchitecture_1.default);
routes.use("/signin", signin_1.default);
routes.use("/signup", signup_1.default);
routes.use("/logout", logout_1.default);
routes.use("/lang", lang_1.default);
routes.use("/label/save", label_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map