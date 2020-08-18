import * as express from "express";
import * as loginCheck from "connect-ensure-login";

import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "../../../projectentity/User";
import {Project} from "../../../projectentity/Project";
import {Team} from "../../../projectentity/Team";
import {TeaModule} from "../../../projectentity/TeaModule";
import {TeaScript} from "../../../projectentity/TeaScript";

const router = express.Router();

router.get("/create/project/:projectname", loginCheck.ensureLoggedIn({ redirectTo: "/signin" }), function (req, res, next) {
    
    // Sanatizing project name to project file name.
    let projectFile = req.params.projectname;
    projectFile = projectFile.toLowerCase().replace(/\W+/g, " ").split(" ").join("_");

    // Save both the project file and project name.
    req.session.projectFile = projectFile;
    req.session.projectName = req.params.projectname;
    req.session.save((err) => {
        res.redirect("/dashboard");
    });

    // @ts-ignore
    createConnection({
        "name": projectFile,
        "type": "sqlite",
        "database": "projects/" + projectFile + ".db",
        "synchronize": true,
        "logging": false,
        "entities": [
            User,
            Project,
            Team,
            TeaModule,
            TeaScript,
        ],
        }).then(connection => {
            // here you can start to work with your entities
            console.log('[DBSYSTEM] - Created project database: projects/' + projectFile + ".db - for project " + req.params.projectname);
        }).catch(error => console.log(error));
    
    res.json({ success: true });

});

export default router;