import { Router, Request, Response } from "express";
import homepage from "./homepage";
import projectDelete from "./projectDelete";
import projectCreate from "./projectCreate";
import projectDetail from "./projectDetail";
import projectDesign from "./projectDesign";
import projectSecurity from "./projectSecurity";
import projectDatabase from "./projectDatabase";
import projectSettings from "./projectSettings";
import projectEdit from "./projectEdit";
import projectCloudArchitecture from "./projectCloudArchitecture";
import mindmap from "./mindmap";
import dashboard from "./dashboard";
import kanbanboard from "./kanbanboard";
import architect from "./architect";
import signin from "./signin";
import signup from "./signup";
import logout from "./logout";
import lang from "./lang";
import label from "./label";

// Mendix API
import apiV1Mendix from "./api/v1/mendix";

// Tea API
import apiV1Tea from "./api/v1/tea";

const routes = Router();

// API
routes.use("/api/v1/mendix", apiV1Mendix);
routes.use("/api/v1/tea", apiV1Tea);

// Page
routes.use("/", homepage);
routes.use("/dashboard", dashboard);
routes.use("/architect", architect);
routes.use("/mindmap", mindmap);
routes.use("/kanbanboard", kanbanboard);
routes.use("/project-create", projectCreate);
routes.use("/project-database", projectDatabase);
routes.use("/project-security", projectSecurity);
routes.use("/project-detail", projectDetail);
routes.use("/project-design", projectDesign);
routes.use("/project-edit", projectEdit);
routes.use("/project-delete", projectDelete);
routes.use("/project-settings", projectSettings);
routes.use("/project-cloud-architecture", projectCloudArchitecture);
routes.use("/signin", signin);
routes.use("/signup", signup);
routes.use("/logout", logout);
routes.use("/lang", lang);
routes.use("/label/save", label);

export default routes;