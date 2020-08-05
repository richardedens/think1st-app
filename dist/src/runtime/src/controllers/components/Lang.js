"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lang = /** @class */ (function () {
    function Lang() {
    }
    Lang.setLanguage = function (lang) {
        this.lang = lang;
    };
    Lang.getLanguageDescription = function (lang) {
        switch (lang) {
            case "nl":
                return "Nederlands";
            case "en":
                return "English";
            case "da":
                return "Dansk";
            case "de":
                return "Deutsch";
            case "ar":
                return "עברית";
            case "fa":
                return "فارسی";
            case "po":
                return "Português";
            case "es":
                return "Español";
            default:
                return "Nederlands";
        }
    };
    Lang.lang = "nl";
    return Lang;
}());
exports.default = Lang;
//# sourceMappingURL=Lang.js.map