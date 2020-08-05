"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LanguageController = /** @class */ (function () {
    function LanguageController() {
    }
    LanguageController.nl = function (req, res) {
        req.session.lang = "nl";
        req.session.save(function (err) {
            res.redirect(req.header('Referrer'));
        });
    };
    LanguageController.en = function (req, res) {
        req.session.lang = "en";
        req.session.save(function (err) {
            res.redirect(req.header('Referrer'));
        });
    };
    LanguageController.fr = function (req, res) {
        req.session.lang = "fr";
        req.session.save(function (err) {
            res.redirect(req.header('Referrer'));
        });
    };
    LanguageController.de = function (req, res) {
        req.session.lang = "de";
        req.session.save(function (err) {
            res.redirect(req.header('Referrer'));
        });
    };
    LanguageController.da = function (req, res) {
        req.session.lang = "da";
        req.session.save(function (err) {
            res.redirect(req.header('Referrer'));
        });
    };
    LanguageController.es = function (req, res) {
        req.session.lang = "es";
        req.session.save(function (err) {
            res.redirect(req.header('Referrer'));
        });
    };
    LanguageController.ar = function (req, res) {
        req.session.lang = "ar";
        req.session.save(function (err) {
            res.redirect(req.header('Referrer'));
        });
    };
    LanguageController.fa = function (req, res) {
        req.session.lang = "fa";
        req.session.save(function (err) {
            res.redirect(req.header('Referrer'));
        });
    };
    LanguageController.po = function (req, res) {
        req.session.lang = "po";
        req.session.save(function (err) {
            res.redirect(req.header('Referrer'));
        });
    };
    return LanguageController;
}());
exports.default = LanguageController;
//# sourceMappingURL=LanguageController.js.map