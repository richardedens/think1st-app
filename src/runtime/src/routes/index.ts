import { Router, Request, Response } from "express";
import homepage from "./homepage";
import projectCreate from "./projectCreate";
import projectDetail from "./projectDetail";
import projectEdit from "./projectEdit";
import mindmap from "./mindmap";
import dashboard from "./dashboard";
import kanbanboard from "./kanbanboard";
import signin from "./signin";
import signup from "./signup";
import logout from "./logout";
import lang from "./lang";
import label from "./label";

// API
import apiV1Mendix from "./api/v1/mendix";

const routes = Router();

// API
routes.use("/api/v1/mendix", apiV1Mendix);

// Page
routes.use("/", homepage);
routes.use("/dashboard", dashboard);
routes.use("/mindmap", mindmap);
routes.use("/kanbanboard", kanbanboard);
routes.use("/project-create", projectCreate);
routes.use("/project-detail", projectDetail);
routes.use("/project-edit", projectEdit);
routes.use("/signin", signin);
routes.use("/signup", signup);
routes.use("/logout", logout);
routes.use("/lang", lang);
routes.use("/label/save", label);

export default routes;