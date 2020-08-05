"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Twing and configuration
var twing_1 = require("twing");
var path_1 = __importDefault(require("path"));
var config_json_1 = __importDefault(require("../../../../config.json"));
// Import custom LabelFunction.
var LabelFunction_1 = __importDefault(require("./functions/LabelFunction"));
var TwingEngine = /** @class */ (function () {
    function TwingEngine() {
    }
    TwingEngine.prototype.render = function (page, vars) {
        // Setup twig loader
        console.log("Loading twig files from: " + path_1.default.join(__dirname, "../../../../../views/", config_json_1.default.theme, page));
        var loader = new twing_1.TwingLoaderFilesystem(path_1.default.join(__dirname, "../../../../../views/", config_json_1.default.theme));
        var environment = new twing_1.TwingEnvironment(loader, { cache: false, auto_reload: true, debug: true });
        var labelFunction = new LabelFunction_1.default();
        environment.addFunction(labelFunction.fn());
        // Render the template
        return environment.render(page, vars);
    };
    return TwingEngine;
}());
exports.default = TwingEngine;
//# sourceMappingURL=TwingEngine.js.map