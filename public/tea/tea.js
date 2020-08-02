window.Tea = tea = (function() {

    let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    let fireFoxEvt = {};

    let teaArea = {};
    let teaEditor = {};

    let cssSelector = "";

    function renderLanguages() {
        renderTypeScript();
        renderPython();
        renderPHP();
        renderCSharp();
        renderJava();
    }

    function getModel() {
        return new Promise(function(resolve, reject) {

            let json = { code: [] };
            let self = this;
            document.querySelectorAll(cssSelector + " .tea-editor-inner .tea-component").forEach(function(item, index) {
                if (item.classList.contains("tea-start")) {
                    json.code.push({ "type": "start" });
                }
                if (item.classList.contains("tea-stop")) {
                    json.code.push({ "type": "stop" });
                }
                if (item.classList.contains("tea-action")) {
                    json.code.push({ "type": "action" });
                }
                if (item.classList.contains("tea-import")) {
                    json.code.push({ "type": "import" });
                }
                if (item.classList.contains("tea-variable")) {
                    json.code.push({ "type": "variable" });
                }
            });
            resolve(json);

        });
    }

    function renderTypeScript() {
        // Prerequisites.
        getModel().then(function(json) {
            console.log(json);
            let className = document.getElementById("file-name").textContent.replace(".tea", "");

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
        getModel().then(function(json) {
            console.log(json);
            let className = document.getElementById("file-name").textContent.replace(".tea", "");

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
        getModel().then(function(json) {
            console.log(json);
            let className = document.getElementById("file-name").textContent.replace(".tea", "");

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
        getModel().then(function(json) {
            console.log(json);
            let className = document.getElementById("file-name").textContent.replace(".tea", "");

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
        getModel().then(function(json) {
            console.log(json);
            let className = document.getElementById("file-name").textContent.replace(".tea", "");

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

    // Setup dragging elements.
    function handleDragStart(e) {
        if (isFirefox) {
            e.target.style.left = (fireFoxEvt.pageX - teaEditor.offsetLeft - (e.target.style.width.replace("px", "") / 2)) + teaEditor.scrollLeft + "px";
            e.target.style.top = (fireFoxEvt.pageY - teaEditor.offsetTop - (e.target.style.height.replace("px", "") / 2)) + teaEditor.scrollTop + "px";
        } else {
            e.target.style.left = (e.pageX - teaEditor.offsetLeft - (e.target.style.width.replace("px", "") / 2)) + teaEditor.scrollLeft + "px";
            e.target.style.top = (e.pageY - teaEditor.offsetTop - (e.target.style.height.replace("px", "") / 2)) + teaEditor.scrollTop + "px";
        }
        // Data Transfer
        img = new Image();
        e.dataTransfer.effectAllowed = 'all';
        e.dataTransfer.setDragImage(img, -1000, -1000);
        e.dataTransfer.setData('text/html', e.innerHTML);
    }

    function handleDrag(e) {
        if (isFirefox) {
            e.target.style.left = (fireFoxEvt.pageX - teaEditor.offsetLeft - Math.ceil(e.target.style.width.replace("px", "") / 2)) + teaEditor.scrollLeft + "px";
            e.target.style.top = (fireFoxEvt.pageY - teaEditor.offsetTop - Math.ceil(e.target.style.height.replace("px", "") / 2)) + teaEditor.scrollTop + "px";
        } else {
            e.target.style.left = (e.pageX - teaEditor.offsetLeft - Math.ceil(e.target.style.width.replace("px", "") / 2)) + teaEditor.scrollLeft + "px";
            e.target.style.top = (e.pageY - teaEditor.offsetTop - Math.ceil(e.target.style.height.replace("px", "") / 2)) + teaEditor.scrollTop + "px";
        }
    };

    function handleDrop(e) {
        if (isFirefox) {
            e.target.style.left = (fireFoxEvt.pageX - teaEditor.offsetLeft - Math.ceil(e.target.style.width.replace("px", "") / 2)) + teaEditor.scrollLeft + "px";
            e.target.style.top = (fireFoxEvt.pageY - teaEditor.offsetTop - Math.ceil(e.target.style.height.replace("px", "") / 2)) + teaEditor.scrollTop + "px";
        } else {
            e.target.style.left = (e.pageX - teaEditor.offsetLeft - Math.ceil(e.target.style.width.replace("px", "") / 2)) + teaEditor.scrollLeft + "px";
            e.target.style.top = (e.pageY - teaEditor.offsetTop - Math.ceil(e.target.style.height.replace("px", "") / 2)) + teaEditor.scrollTop + "px";
        }
    };

    function handleDragEnd(e) {
        if (isFirefox) {
            e.target.style.left = (fireFoxEvt.pageX - teaEditor.offsetLeft - Math.ceil(e.target.style.width.replace("px", "") / 2)) + teaEditor.scrollLeft + "px";
            e.target.style.top = (fireFoxEvt.pageY - teaEditor.offsetTop - Math.ceil(e.target.style.height.replace("px", "") / 2)) + teaEditor.scrollTop + "px";
        } else {
            e.target.style.left = (e.pageX - teaEditor.offsetLeft - Math.ceil(e.target.style.width.replace("px", "") / 2)) + teaEditor.scrollLeft + "px";
            e.target.style.top = (e.pageY - teaEditor.offsetTop - Math.ceil(e.target.style.height.replace("px", "") / 2)) + teaEditor.scrollTop + "px";
        }
    };

    // Create new items.
    function connect(action, el) {
        let self = this;
        switch (action) {
            case "start":
                el.addEventListener('click', function(el) {
                    createStart();
                    renderLanguages();
                });
                break;
            case "action":
                el.addEventListener('click', function(el) {
                    createAction();
                    renderLanguages();
                });
                break;
            case "stop":
                el.addEventListener('click', function(el) {
                    createStop();
                    renderLanguages();
                });
                break;
            case "variable":
                el.addEventListener('click', function(el) {
                    createVariable();
                    renderLanguages();
                });
                break;
            case "import":
                el.addEventListener('click', function(el) {
                    createImport();
                    renderLanguages();
                });
                break;
        }
    }

    function handleDragEnter(e) {}

    function handleDragLeave(e) {}

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }

    function attachAllDragEvents(el) {
        el.addEventListener('dragstart', handleDragStart, false);
        el.addEventListener('drag', handleDrag, false);
        el.addEventListener('drop', handleDrop, false);
        el.addEventListener('dragover', handleDragOver, false);
        el.addEventListener('dragenter', handleDragEnter, false);
        el.addEventListener('dragleave', handleDragLeave, false);
        el.addEventListener('dragend', handleDragEnd, false);
    }

    function createStart() {
        let el = document.createElement("div");
        el.className = "tea-component tea-start";
        el.style.left = (1 + teaEditor.scrollLeft) + "px";
        el.style.top = (1 + teaEditor.scrollTop) + "px";
        el.style.width = "32px";
        el.style.height = "32px";
        el.setAttribute("draggable", "true");
        attachAllDragEvents(el);
        teaArea.append(el);
    }

    function createAction() {
        let el = document.createElement("div");
        el.className = "tea-component tea-action";
        el.style.left = (1 + teaEditor.scrollLeft) + "px";
        el.style.top = (1 + teaEditor.scrollTop) + "px";
        el.style.width = "150px";
        el.style.height = "80px";
        el.setAttribute("draggable", "true");
        attachAllDragEvents(el);
        teaArea.insertBefore(el, teaArea.childNodes[0]);
    }

    function createStop() {
        let el = document.createElement("div");
        el.className = "tea-component tea-stop";
        el.style.left = (1 + teaEditor.scrollLeft) + "px";
        el.style.top = (1 + teaEditor.scrollTop) + "px";
        el.style.width = "32px";
        el.style.height = "32px";
        el.setAttribute("draggable", "true");
        attachAllDragEvents(el);
        teaArea.insertBefore(el, teaArea.childNodes[0]);
    }

    function createConnection() {
        let el = document.createElement("div");
        el.className = "tea-connection";
        el.style.left = (1 + teaEditor.scrollLeft) + "px";
        el.style.top = (1 + teaEditor.scrollTop) + "px";
        el.style.width = "300px";
        el.style.height = "300px";
        el.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
<g transform="matrix(2.05158,0,0,2.0487,-4.67167,-520.09)">
<path d="M2.448,498.601C119.645,498.601 122.267,253.863 245.14,253.863" style="fill:none;stroke:black;stroke-width:0.85px;"/>
</g>
</svg>`;
        el.setAttribute("draggable", "true");
        teaArea.insertBefore(el, teaArea.childNodes[0]);
    }

    function createVariable() {
        let el = document.createElement("div");
        el.className = "tea-component tea-variable";
        el.style.left = (1 + teaEditor.scrollLeft) + "px";
        el.style.top = (1 + teaEditor.scrollTop) + "px";
        el.style.width = "32px";
        el.style.height = "32px";
        el.innerHTML = `<svg width="32" height="32" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(1,0,0,1,-25.8741,15.3846)">
        <path d="M417.022,326.573C432.213,305.737 440.21,282.102 440.21,258.042C440.21,182.395 362.657,120.979 267.133,120.979C171.609,120.979 94.056,182.395 94.056,258.042C94.056,282.102 102.053,305.737 117.244,326.573L417.022,326.573Z" style="fill:rgb(255,234,203);stroke:rgb(255,181,92);stroke-width:19.52px;"/>
    </g>
</svg>`;
        el.setAttribute("draggable", "true");
        attachAllDragEvents(el);
        teaArea.insertBefore(el, teaArea.childNodes[0]);
    }

    function createImport() {
        let el = document.createElement("div");
        el.className = "tea-component tea-import";
        el.style.left = (1 + teaEditor.scrollLeft) + "px";
        el.style.top = (1 + teaEditor.scrollTop) + "px";
        el.style.width = "32px";
        el.style.height = "32px";
        el.innerHTML = `<svg width="32" height="32" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(1.28226,0,0,1,-97.5271,-23.0769)">
        <path d="M267.483,90.909C267.483,90.909 137.413,228.217 137.413,287.063C137.413,379.113 195.695,453.846 267.483,453.846C339.27,453.846 397.552,379.113 397.552,287.063C397.552,228.217 267.483,90.909 267.483,90.909Z" style="fill:rgb(255,203,245);stroke:rgb(255,92,213);stroke-width:16.98px;"/>
    </g>
</svg>`;
        el.setAttribute("draggable", "true");
        attachAllDragEvents(el);
        teaArea.insertBefore(el, teaArea.childNodes[0]);
    }

    function init(cssSelector) {
        // Set css selector.
        cssSelector = cssSelector;

        // Grab the div that will be the tea editor
        teaArea = document.querySelectorAll(cssSelector + " .tea-editor-inner")[0];
        teaEditor = document.querySelectorAll(cssSelector)[0];

        // Damn , the browser war is still out there. firefox needs help with the drag coordinates.
        if (isFirefox) {
            teaArea.addEventListener('dragover', function(e) {
                fireFoxEvt = e
            }, false);
        }
    }

    return {
        init: init,
        connect: connect
    }
}());

document.addEventListener('DOMContentLoaded', (event) => {
    Tea.init(".tea-editor");
    Tea.connect('start', document.getElementById('tea-start'));
    Tea.connect('stop', document.getElementById('tea-stop'));
    Tea.connect('action', document.getElementById('tea-action'));
    Tea.connect('variable', document.getElementById('tea-variable'));
    Tea.connect('import', document.getElementById('tea-import'));
});