import { Request, Response, NextFunction } from "express";

export const hasJwt = (req: Request, res: Response, next: NextFunction) => {
    //Get the jwt token from the head
    const token = <string>req.headers["token"];
    if (token === undefined || token === '') {
        res.redirect("/signin");
    } else {
        //Call the next middleware or controller
        next();
    }
};