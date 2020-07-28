/**
 * Tea - Version 1.0.0.
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
            let code = "/* Load the Tea TypeScript Dependencies. */\r\n";
            code += "import { action } from \"tea\";\r\n\r\n";
            code += "class " + className + " {\r\n";

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
            let code = "/* Load the Tea PHP Dependencies. */\r\n";
            code += "$teaAction = require_once(\"tea-action.php\");\r\n\r\n";
            code += "class " + className + " {\r\n";

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
                    code += "\t\t$teaAction();\r\n";
                }
            });
            code += "}\r\n";

            // Output code
            const html = Prism.highlight(code, Prism.languages.php, 'php');
            document.getElementById("tea-output-php").innerHTML = html;
        });

    }

    function renderPython() {
        // Prerequisites.
        tea("#tea-editor").getModel().then(function(json) {
            console.log(json);
            let className = tea("#file-name").text().replace(".tea", "");

            // Setup rendered code.
            let code = "# Load the Tea Python Dependencies.\r\n";
            code += "from tea import action\r\n\r\n";
            code += "class " + className + "():\r\n";

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

});