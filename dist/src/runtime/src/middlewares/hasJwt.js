"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasJwt = function (req, res, next) {
    //Get the jwt token from the head
    var token = req.headers["token"];
    if (token === undefined || token === '') {
        res.redirect("/signin");
    }
    else {
        //Call the next middleware or controller
        next();
    }
};
//# sourceMappingURL=hasJwt.js.map