/* ------------------------------------------------------------------------
 *
 *         )  (           
 *        (   ) )      
 *         ) ( (           
 *       _______)_    _______     
 *    .-'---------|  |__   __|
 *   ( C|/\/\/\/\/|     | | ___  __ _ 
 *    '-./\/\/\/\/|     | |/ _ \/ _` |
 *      '_________'     | |  __/ (_| |
 *       '-------'      |_|\___|\__,_|
 *      -----------   ------------------
 *                         version 1.0.0
 * 
 * Author: 
 * -------------------------------------
 * Gerhard Richard Edens
 * 
 * Description:
 * -------------------------------------
 * The IDE development environment.
 * 
 */
tea(document).ready(function() {

    /**
     * Get inscribed area size
     *
     * @param int oW outer width
     * @param int oH outer height
     * @param int iW inner width
     * @param int iH inner height
     * @param bool R resize if smaller
     */
    function getInscribedArea(oW, oH, iW, iH, R) {
        if (!R && iW < oW && iH < oH) {
            return {
                "h": iH,
                "w": iW
            };
        }
        if ((oW / oH) > (iW / iH)) {
            return {
                "h": oH,
                "w": Math.round(oH * iW / iH)
            }
        } else {
            return {
                "h": Math.round(oW * iH / iW),
                "w": oW
            };
        }
    }

    function renderTypeScript() {
        // Prerequisites.
        tea("#tea-editor").getModel().then(function(json) {
            console.log(json);
            let className = tea("#file-name").text().replace(".tea", "");

            // Setup rendered code.
            let code = `/**
 *         )  (           
 *        (   ) )      
 *         ) ( (           
 *       _______)_    _______     
 *    .-'---------|  |__   __|
 *   ( C|/\\/\\/\\/\\/|     | | ___  __ _ 
 *    '-./\\/\\/\\/\\/|     | |/ _ \\\/ _\\ |
 *      '_________'     | |  __\/ (_| |
 *       '-------'      |_|\\___|\\__,_|
 *      -----------   ------------------
 */

`;

            code += "import { action } from \"teapot\";\r\n";

            // Setup imports
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'import') {
                    code += "\import lib;\r\n";
                }
            });
            code += "\r\n";
            code += "export default class " + className + " {\r\n";

            // Create variables.
            let row = "";
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'variable') {
                    code += "\tprivate newvar: String = \"\";\r\n";
                    row = "\r\n";
                }
            });
            code += row;

            // Compile code
            console.log(json);
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'start') {
                    code += "\trun() {\r\n";
                }
                if (item['type'] === 'stop') {
                    code += "\t}\r\n";
                }
                if (item['type'] === 'action') {
                    code += "\t\taction();\r\n";
                }
            });
            code += "}\r\n";
            console.log(code);

            // Output code
            const html = Prism.highlight(code, Prism.languages.typescript, 'typescript');
            document.getElementById("tea-output-typescript").innerHTML = html;
        });

    }

    function renderPHP() {
        // Prerequisites.
        tea("#tea-editor").getModel().then(function(json) {
            console.log(json);
            let className = tea("#file-name").text().replace(".tea", "");

            // Setup rendered code.
            let code = `/**
 *         )  (           
 *        (   ) )      
 *         ) ( (           
 *       _______)_    _______     
 *    .-'---------|  |__   __|
 *   ( C|/\\/\\/\\/\\/|     | | ___  __ _ 
 *    '-./\\/\\/\\/\\/|     | |/ _ \\\/ _\\ |
 *      '_________'     | |  __\/ (_| |
 *       '-------'      |_|\\___|\\__,_|
 *      -----------   ------------------
 */

`;
            code += "$tea = require_once(\"teapot.php\");\r\n";

            // Setup imports
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'import') {
                    code += "\$lib = require_once(\"lib\");\r\n";
                }
            });
            code += "\r\n";
            code += "class " + className + " {\r\n";

            // Create variables.
            let row = "";
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'variable') {
                    code += "\tprivate $newvar = \"\";\r\n";
                    row = "\r\n";
                }
            });
            code += row;

            // Compile code
            console.log(json);
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'start') {
                    code += "\tfunction run() {\r\n";
                }
                if (item['type'] === 'stop') {
                    code += "\t}\r\n";
                }
                if (item['type'] === 'action') {
                    code += "\t\t$tea.action();\r\n";
                }
            });
            code += "}\r\n";

            // Output code
            const html = Prism.highlight(code, Prism.languages.php, 'php');
            document.getElementById("tea-output-php").innerHTML = html;
        });

    }


    function renderCSharp() {
        // Prerequisites.
        tea("#tea-editor").getModel().then(function(json) {
            console.log(json);
            let className = tea("#file-name").text().replace(".tea", "");

            // Setup rendered code.
            let code = `/**
 *         )  (           
 *        (   ) )      
 *         ) ( (           
 *       _______)_    _______     
 *    .-'---------|  |__   __|
 *   ( C|/\\/\\/\\/\\/|     | | ___  __ _ 
 *    '-./\\/\\/\\/\\/|     | |/ _ \\\/ _\\ |
 *      '_________'     | |  __\/ (_| |
 *       '-------'      |_|\\___|\\__,_|
 *      -----------   ------------------
 */

`;
            code += "using TeaPot.*;\r\n";

            // Setup imports
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'import') {
                    code += "using lib;\r\n";
                }
            });
            code += "\r\n";
            code += "public class " + className + " {\r\n";

            // Create variables.
            let row = "";
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'variable') {
                    code += "\tprivate string newvar = \"\";\r\n";
                    row = "\r\n";
                }
            });
            code += row;

            // Compile code
            console.log(json);
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'start') {
                    code += "\tpublic void run() {\r\n";
                }
                if (item['type'] === 'stop') {
                    code += "\t}\r\n";
                }
                if (item['type'] === 'action') {
                    code += "\t\taction();\r\n";
                }
            });
            code += "}\r\n";

            // Output code
            const html = Prism.highlight(code, Prism.languages.csharp, 'csharp');
            document.getElementById("tea-output-csharp").innerHTML = html;
        });

    }

    function renderJava() {
        // Prerequisites.
        tea("#tea-editor").getModel().then(function(json) {
            console.log(json);
            let className = tea("#file-name").text().replace(".tea", "");

            // Setup rendered code.

            let code = `/**
 *         )  (           
 *        (   ) )      
 *         ) ( (           
 *       _______)_    _______     
 *    .-'---------|  |__   __|
 *   ( C|/\\/\\/\\/\\/|     | | ___  __ _ 
 *    '-./\\/\\/\\/\\/|     | |/ _ \\\/ _\\ |
 *      '_________'     | |  __\/ (_| |
 *       '-------'      |_|\\___|\\__,_|
 *      -----------   ------------------
 */

`;
            code += "import com.teapot.tea.action;\r\n";

            // Setup imports
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'import') {
                    code += "import lib;\r\n";
                }
            });
            code += "\r\n";
            code += "public class " + className + " {\r\n";

            // Create variables.
            let row = "";
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'variable') {
                    code += "\tprivate String newvar = \"\";\r\n";
                    row = "\r\n";
                }
            });
            code += row;

            // Compile code
            console.log(json);
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'start') {
                    code += "\tpublic void run() {\r\n";
                }
                if (item['type'] === 'stop') {
                    code += "\t}\r\n";
                }
                if (item['type'] === 'action') {
                    code += "\t\taction();\r\n";
                }
            });
            code += "}\r\n";

            // Output code
            const html = Prism.highlight(code, Prism.languages.java, 'java');
            document.getElementById("tea-output-java").innerHTML = html;
        });

    }

    function renderPython() {
        // Prerequisites.
        tea("#tea-editor").getModel().then(function(json) {
            console.log(json);
            let className = tea("#file-name").text().replace(".tea", "");

            // Setup rendered code.

            let code = `#
#         )  (           
#        (   ) )      
#         ) ( (           
#       _______)_    _______     
#    .-'---------|  |__   __|
#   ( C|/\\/\\/\\/\\/|     | | ___  __ _ 
#    '-./\\/\\/\\/\\/|     | |/ _ \\\/ _\\ |
#      '_________'     | |  __\/ (_| |
#       '-------'      |_|\\___|\\__,_|
#      -----------   ------------------
#

`;
            code += "from tea import action\r\n";

            // Setup imports
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'import') {
                    code += "\import lib\r\n";
                }
            });
            code += "\r\n";

            code += "class " + className + "():\r\n";

            // Create variables.
            let row = "";
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'variable') {
                    code += "\tnewvar = \"\"\r\n";
                    row = "\r\n";
                }
            });
            code += row;

            // Compile code
            console.log(json);
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'start') {
                    code += "\tdef run():\r\n";
                }
                if (item['type'] === 'stop') {}
                if (item['type'] === 'action') {
                    code += "\t\taction()\r\n";
                }
            });

            // Output code
            const html = Prism.highlight(code, Prism.languages.python, 'python');
            document.getElementById("tea-output-python").innerHTML = html;
        });

    }

    tea("#tea-editor").poor();

    tea("#add-action").on('click', () => {
        let success = tea("#tea-editor").addAction();
        if (!success) {
            tea("#tea-information-msg").html("There needs to be a START in your TEA script.");
            tea("#tea-information-modal").modal();
        }
        renderTypeScript();
        renderPython();
        renderPHP();
        renderCSharp();
        renderJava();
    });

    tea("#add-start").on('click', () => {
        let success = tea("#tea-editor").addStart();
        if (!success) {
            tea("#tea-information-msg").html("There is already a START in your TEA script.");
            tea("#tea-information-modal").modal();
        }
        renderTypeScript();
        renderPython();
        renderPHP();
        renderCSharp();
        renderJava();
    });

    tea("#add-stop").on('click', () => {
        let success = tea("#tea-editor").addStop();
        if (!success) {
            tea("#tea-information-msg").html("There is already a STOP in your TEA script.");
            tea("#tea-information-modal").modal();
        }
        renderTypeScript();
        renderPython();
        renderPHP();
        renderCSharp();
        renderJava();
    });

    tea("#add-variable").on('click', () => {
        tea("#tea-editor").addVariable();
        renderTypeScript();
        renderPython();
        renderPHP();
        renderCSharp();
        renderJava();
    });

    tea("#add-import").on('click', () => {
        tea("#tea-editor").addImport();
        renderTypeScript();
        renderPython();
        renderPHP();
        renderCSharp();
        renderJava();
    });

    tea("#file-name").on('change', function() {
        renderTypeScript();
        renderPython();
        renderPHP();
        renderCSharp();
        renderJava();
    });

    tea('.scrollbar-map').scrollbar({
        "onInit": function() {
            this.container.find('.scroll-element_outer').appendTo(this.wrapper);
        },
        "onUpdate": function(container) {
            var s = getInscribedArea(140, 140, this.scrollx.size, this.scrolly.size);
            this.scrolly.scroll.height(s.h);
            this.scrollx.scroll.width(s.w);
        },
        "scrollx": $('.scrollbar-map .scroll-element_outer'),
        "scrolly": $('.scrollbar-map .scroll-element_outer'),
        "stepScrolling": false
    });

    let pos = {}
    let selection = tea("<div></div>");
    selection.addClass("tea-selection");
    let selectmode = false;
    window.teaInteractionMode = false;

    function deselect() {
        tea('.tea-selection').css("left", "-4px");
        tea('.tea-selection').css("top", "-4px");
        tea('.tea-selection').css("width", "1px");
        tea('.tea-selection').css("height", "1px");
    }
    tea('#tea-editor').append(selection);
    tea('.tea-editor-outer').click(function() {
        let range = {};
        range.l = pos.x;
        range.r = pos.x + parseInt(tea('.tea-selection').css("width").replace("px", ""), 10);
        range.t = pos.y;
        range.b = pos.y + parseInt(tea('.tea-selection').css("height").replace("px", ""), 10);
        console.log(range);
        deselect();
    });
    tea('.tea-editor-outer').mousedown(function(evt) {
        if (window.teaInteractionMode) {
            deselect();
        } else {
            let epos = tea('.tea-editor-outer').position();
            pos.x = evt.clientX - epos.left;
            pos.y = evt.clientY - epos.top;
            tea('.tea-selection').css("left", pos.x + "px");
            tea('.tea-selection').css("top", pos.y + "px");
            selectmode = true;
        }
    });

    tea('.tea-editor-outer').mousemove(function(evt) {
        if (window.teaInteractionMode) {
            deselect();
        } else {
            if (selectmode) {
                let epos = tea('.tea-editor-outer').position();
                let w = (evt.clientX - epos.left) - pos.x;
                let h = (evt.clientY - epos.top) - pos.y;
                tea('.tea-selection').css("width", w + "px");
                tea('.tea-selection').css("height", h + "px");
            }
        }
    });

    tea('.tea-editor-outer').mouseup(function(evt) {
        if (window.teaInteractionMode) {
            let range = {}
            range.l = pos.x;
            range.r = pos.x + tea('.tea-selection').css("width").replace("px", "");
            range.t = pos.y;
            range.b = pos.y + tea('.tea-selection').css("height").replace("px", "");
            console.log(range);
            deselect();
        } else {
            selectmode = false;
        }
    });

});