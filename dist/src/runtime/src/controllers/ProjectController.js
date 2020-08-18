"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var TwingEngine_1 = __importDefault(require("../twig/TwingEngine"));
var Lang_1 = __importDefault(require("./components/Lang"));
var config_json_1 = __importDefault(require("../../../../config.json"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("../projectentity/User");
var Project_1 = require("../projectentity/Project");
var Team_1 = require("../projectentity/Team");
var TeaModule_1 = require("../projectentity/TeaModule");
var TeaScript_1 = require("../projectentity/TeaScript");
var ProjectController = /** @class */ (function () {
    function ProjectController() {
    }
    ProjectController.create = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var projectFile;
        return __generator(this, function (_a) {
            // Sanatizing project name to project file name.
            console.log(req.body);
            projectFile = req.body.projectname;
            projectFile = projectFile.toLowerCase().replace(/\W+/g, " ").split(" ").join("_");
            // Save both the project file and project name.
            req.session.projectFile = projectFile;
            req.session.projectName = req.params.projectname;
            req.session.save(function (err) {
                // @ts-ignore
                typeorm_1.createConnection({
                    "name": projectFile,
                    "type": "sqlite",
                    "database": "projects/" + projectFile + ".db",
                    "synchronize": true,
                    "logging": false,
                    "entities": [
                        User_1.User,
                        Project_1.Project,
                        Team_1.Team,
                        TeaModule_1.TeaModule,
                        TeaScript_1.TeaScript,
                    ],
                }).then(function (connection) {
                    // here you can start to work with your entities
                    console.log('[DBSYSTEM] - Created project database: projects/' + projectFile + ".db - for project " + req.params.projectname);
                    res.redirect("/dashboard");
                }).catch(function (error) {
                    console.log(error);
                    res.redirect("/dashboard");
                });
            });
            return [2 /*return*/];
        });
    }); };
    ProjectController.show = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var twingEngine, loggedin;
        return __generator(this, function (_a) {
            res.set('Cache-Control', 'no-store');
            twingEngine = new TwingEngine_1.default();
            loggedin = req.session.loggedin || false;
            // Render the projects
            twingEngine.render("project-create.twig", {
                title: "Think1st - Platform",
                pageid: "projects",
                cachebust: ("v=" + +new Date),
                nonce: res.locals.nonce,
                loggedin: loggedin,
                currentLanguage: Lang_1.default.getLanguageDescription((req.session.lang) ? req.session.lang : "en"),
                lang: (req.session.lang) ? req.session.lang : "en",
                page: 'projects',
                /*csrfToken: req.csrfToken(),*/
                environment: config_json_1.default.environment
            }).then(function (output) {
                res.send(output);
            }).catch(function (err) {
                res.send(err.toString());
            });
            return [2 /*return*/];
        });
    }); };
    ProjectController.detail = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var twingEngine, loggedin;
        return __generator(this, function (_a) {
            twingEngine = new TwingEngine_1.default();
            loggedin = req.session.loggedin || false;
            twingEngine.render("project-detail.twig", {
                title: "Think1st - Platform",
                pageid: "projectdetail",
                cachebust: ("v=" + +new Date),
                nonce: res.locals.nonce,
                loggedin: loggedin,
                currentLanguage: Lang_1.default.getLanguageDescription((req.session.lang) ? req.session.lang : "en"),
                lang: (req.session.lang) ? req.session.lang : "en",
                environment: config_json_1.default.environment
            }).then(function (output) {
                res.send(output);
            }).catch(function (err) {
                res.send(err.toString());
            });
            return [2 /*return*/];
        });
    }); };
    ProjectController.edit = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var twingEngine, loggedin;
        return __generator(this, function (_a) {
            twingEngine = new TwingEngine_1.default();
            loggedin = req.session.loggedin || false;
            twingEngine.render("project-edit.twig", {
                title: "Think1st - Platform",
                pageid: "projectedit",
                cachebust: ("v=" + +new Date),
                nonce: res.locals.nonce,
                loggedin: loggedin,
                currentLanguage: Lang_1.default.getLanguageDescription((req.session.lang) ? req.session.lang : "en"),
                lang: (req.session.lang) ? req.session.lang : "en",
                environment: config_json_1.default.environment
            }).then(function (output) {
                res.send(output);
            }).catch(function (err) {
                res.send(err.toString());
            });
            return [2 /*return*/];
        });
    }); };
    return ProjectController;
}());
exports.default = ProjectController;
//# sourceMappingURL=ProjectController.js.map