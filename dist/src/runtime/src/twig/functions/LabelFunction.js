"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var twing_1 = require("twing");
var Label_1 = __importDefault(require("../../entity/Label"));
var db_1 = __importDefault(require("../../db/db"));
var LabelFunction = /** @class */ (function () {
    function LabelFunction() {
    }
    LabelFunction.prototype.fn = function () {
        var _this = this;
        // Create label connection renderer
        var labelRenderer = new twing_1.TwingFunction('label', function (template, variables, with_context, name, htmlFront, defaultValue, htmlEnd) {
            // Editable or not.
            htmlFront = (variables.get("loggedin")) ? htmlFront.split("[[edit]]").join("apollo-content-editable") : htmlFront.split("[[edit]]").join("");
            // Create an indicator that can be used in the front end to do something!
            htmlFront = htmlFront.split("[[id]]").join(name);
            return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                var label, html, l, repository;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, db_1.default.connection.getRepository(Label_1.default).findOne({
                                name: name.toString()
                            })];
                        case 1:
                            label = _a.sent();
                            console.log("[LABEL] # Current language: " + variables.get("currentLanguage"));
                            if (!(typeof label !== "undefined")) return [3 /*break*/, 2];
                            html = htmlFront;
                            switch (variables.get("lang")) {
                                case "nl":
                                    html += (label.nl !== "") ? label.nl : "PLEASE ALTER THIS";
                                    break;
                                case "en":
                                    html += (label.en !== "") ? label.en : "PLEASE ALTER THIS";
                                    break;
                                case "da":
                                    html += (label.da !== "") ? label.da : "PLEASE ALTER THIS";
                                    break;
                                case "de":
                                    html += (label.da !== "") ? label.de : "PLEASE ALTER THIS";
                                    break;
                                case "ar":
                                    html += (label.ar !== "") ? label.ar : "PLEASE ALTER THIS";
                                    break;
                                case "fa":
                                    html += (label.fa !== "") ? label.fa : "PLEASE ALTER THIS";
                                    break;
                                case "po":
                                    html += (label.po !== "") ? label.po : "PLEASE ALTER THIS";
                                    break;
                                case "es":
                                    html += (label.es !== "") ? label.es : "PLEASE ALTER THIS";
                                    break;
                                default:
                                    html += (label.nl !== "") ? label.nl : "PLEASE ALTER THIS";
                                    break;
                            }
                            html += htmlEnd;
                            resolve(html);
                            return [3 /*break*/, 5];
                        case 2:
                            l = new Label_1.default();
                            l.name = name.toString();
                            l.nl = defaultValue.toString();
                            l.en = defaultValue.toString();
                            l.de = defaultValue.toString();
                            l.fr = defaultValue.toString();
                            l.fa = defaultValue.toString();
                            l.ar = defaultValue.toString();
                            l.es = defaultValue.toString();
                            l.po = defaultValue.toString();
                            return [4 /*yield*/, db_1.default.connection.getRepository(Label_1.default)];
                        case 3:
                            repository = _a.sent();
                            return [4 /*yield*/, repository.save(l)];
                        case 4:
                            _a.sent();
                            console.log(variables.get("loggedin"));
                            resolve(htmlFront + defaultValue.toString() + htmlEnd);
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
        }, [
            { name: 'template' },
            { name: 'variables', defaultValue: {} },
            { name: 'with_context', defaultValue: true },
            { name: 'ignore_missing', defaultValue: false },
            { name: 'sandboxed', defaultValue: false }
        ], {
            needs_context: true,
            needs_environment: true,
            needs_source: true,
            is_safe: ['all']
        });
        return labelRenderer;
    };
    return LabelFunction;
}());
exports.default = LabelFunction;
//# sourceMappingURL=LabelFunction.js.map