// Import Twing and configuration
import { TwingEnvironment, TwingLoaderFilesystem, TwingFunction } from "twing";
import path from "path";
import config from "../../../../config.json";

// Import custom LabelFunction.
import LabelFunction from "./functions/LabelFunction";

export default class TwingEngine {

    render(page: string, vars: any){

        // Setup twig loader
        console.log("Loading twig files from: " + path.join(__dirname,"../../../../../views/", config.theme, page));
        const loader = new TwingLoaderFilesystem(path.join(__dirname,"../../../../../views/", config.theme));
        const environment = new TwingEnvironment(loader,{cache: false,auto_reload:true,debug:true});
        const labelFunction = new LabelFunction();
    
        environment.addFunction(labelFunction.fn());

        // Render the template
        return environment.render(page, vars);
        
    }
}