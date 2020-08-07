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
    
    // @ts-ignore
    createConnection({
        "name": req.params.projectname,
        "type": "sqlite",
        "database": "projects/" + req.params.projectname + ".db",
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
            console.log('[DBSYSTEM] - Created project database: projects/' + req.params.projectname + ".db");
        }).catch(error => console.log(error));
    
    res.json({ success: true });

});

export default router;