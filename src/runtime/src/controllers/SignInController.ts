import { Request, Response } from "express";
import TwingEngine from "../twig/TwingEngine";

class SignInController {
    static show = async (req: Request, res: Response) => {
        const twingEngine = new TwingEngine();
        twingEngine.render("signin.twig", {
            title: "Feminenza Online - Login",
            cachebust: ("v=" + +new Date)
        }).then((output) => {
            res.send(output);
        }).catch((err) => {
            res.send(err.toString());
        });
    };
}

export default SignInController;