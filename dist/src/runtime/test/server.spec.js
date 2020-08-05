"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes = __importStar(require("../src/routes"));
var chai_1 = require("chai");
require("mocha");
describe("Router should be of type object", function () {
    it("Return of routes should be of type IRouter", function () {
        chai_1.expect(routes).to.be.an("Object");
    });
});
//# sourceMappingURL=server.spec.js.map