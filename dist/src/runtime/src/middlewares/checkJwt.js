"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = __importStar(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config/config"));
exports.checkJwt = function (req, res, next) {
    //Get the jwt token from the head
    var token = req.headers["auth"];
    var jwtPayload;
    //Try to validate the token and get data
    try {
        jwtPayload = jwt.verify(token, config_1.default.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (error) {
        //If token is not valid, respond with 401 (unauthorized)
        res.status(401).send();
        return;
    }
    //The token is valid for 1 hour
    //We want to send a new token on every request
    var userId = jwtPayload.userId, username = jwtPayload.username;
    var newToken = jwt.sign({ userId: userId, username: username }, config_1.default.jwtSecret, {
        expiresIn: "1h"
    });
    res.setHeader("token", newToken);
    //Call the next middleware or controller
    next();
};
//# sourceMappingURL=checkJwt.js.map