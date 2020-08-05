import { TwingFunction } from "twing";
import Label from "../../entity/Label";
import db from "../../db/db";
import { TwingContext } from "twing/dist/types/lib/context";

class LabelFunction {

    fn(): TwingFunction {
        // Create label connection renderer
        const labelRenderer = new TwingFunction('label', (
            template: any, 
            variables: any, 
            with_context: any,
            name: any,
            htmlFront: any,
            defaultValue: any,
            htmlEnd: any): Promise<string> => {

            // Editable or not.
            htmlFront = (variables.get("loggedin")) ? htmlFront.split("[[edit]]").join("apollo-content-editable") : htmlFront.split("[[edit]]").join("")
            
            // Create an indicator that can be used in the front end to do something!
            htmlFront = htmlFront.split("[[id]]").join(name);

            return new Promise(async (resolve) => {

                // Find a label with the name.
                const label: Label = await db.connection.getRepository(Label).findOne({
                    name: name.toString()
                });

                console.log("[LABEL] # Current language: " + variables.get("currentLanguage"));
                
                // Do we have a label?
                if (typeof label !== "undefined") {

                    let html = htmlFront;
                    switch(variables.get("lang")) {
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
                    
                } else {
                    // Lets create a label.
                    const l = new Label();
                    l.name = name.toString();

                    l.nl = defaultValue.toString();
                    l.en = defaultValue.toString();
                    l.de = defaultValue.toString();
                    l.fr = defaultValue.toString();
   
                    l.fa = defaultValue.toString();
                    l.ar = defaultValue.toString();
                    l.es = defaultValue.toString();
                    l.po = defaultValue.toString();

                    // Save the new label!
                    const repository = await db.connection.getRepository(Label);
                    await repository.save(l);

                    console.log(variables.get("loggedin"));
                    resolve(htmlFront + defaultValue.toString() + htmlEnd);
                }

            });
        },[
            {name: 'template'},
            {name: 'variables', defaultValue: {}},
            {name: 'with_context', defaultValue: true},
            {name: 'ignore_missing', defaultValue: false},
            {name: 'sandboxed', defaultValue: false}
        ], {
            needs_context: true,
            needs_environment: true,
            needs_source: true,
            is_safe: ['all']
        });

        return labelRenderer;
    }
    
}

export default LabelFunction;