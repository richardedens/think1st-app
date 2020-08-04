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

            // Create letiables.
            let row = "";
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'variable') {
                    code += "\tprivate newlet: String = \"\";\r\n";
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

            // Create letiables.
            let row = "";
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'variable') {
                    code += "\tprivate $newlet = \"\";\r\n";
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

            // Create letiables.
            let row = "";
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'variable') {
                    code += "\tprivate string newlet = \"\";\r\n";
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

            // Create letiables.
            let row = "";
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'variable') {
                    code += "\tprivate String newlet = \"\";\r\n";
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

            // Create letiables.
            let row = "";
            json.code.reverse().map(function(item, index) {
                if (item['type'] === 'variable') {
                    code += "\tnewlet = \"\"\r\n";
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

    function moveElement(e) {
        console.log(e);
        if (!e.target.classList.contains("anchor")) {
            if (!e.target.classList.contains("tea-archimate-innertext")) {
                if (isFirefox) {
                    e.target.style.left = (fireFoxEvt.pageX - teaEditor.offsetLeft - Math.ceil(e.target.style.width.replace("px", "") / 2)) + teaEditor.scrollLeft + "px";
                    e.target.style.top = (fireFoxEvt.pageY - teaEditor.offsetTop - Math.ceil(e.target.style.height.replace("px", "") / 2)) + teaEditor.scrollTop + "px";
                } else {
                    e.target.style.left = (e.pageX - teaEditor.offsetLeft - Math.ceil(e.target.style.width.replace("px", "") / 2)) + teaEditor.scrollLeft + "px";
                    e.target.style.top = (e.pageY - teaEditor.offsetTop - Math.ceil(e.target.style.height.replace("px", "") / 2)) + teaEditor.scrollTop + "px";
                }
            }
        }
        // Render the connection!
        renderConnections();
    }

    // Setup dragging elements.
    function handleDragStart(e) {
        moveElement(e);
        // Data Transfer
        img = new Image();
        e.dataTransfer.effectAllowed = 'all';
        e.dataTransfer.setDragImage(img, -1000, -1000);
        e.dataTransfer.setData('text/html', e.innerHTML);
    }

    function handleDrag(e) {
        moveElement(e);
    };

    function handleDrop(e) {
        moveElement(e);
    };

    function handleDragEnd(e) {
        moveElement(e);
    };

    // Create new items.
    function connect(action, el) {
        let self = this;
        switch (action) {
            // Tea
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
                // ArchiMate
            case "archimate-resource":
                el.addEventListener('click', function(el) {
                    createArchiMateResource();
                });
                break;
            case "archimate-capability":
                el.addEventListener('click', function(el) {
                    createArchiMateCapability();
                });
                break;
            case "archimate-value-stream":
                el.addEventListener('click', function(el) {
                    createArchiMateValueStream();
                });
                break;
            case "archimate-course-of-action":
                el.addEventListener('click', function(el) {
                    createArchiMateCourseOfAction();
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

    let startElement = false;
    let endElement = false;
    let connectionType = false;

    function handleMouseDown(e) {
        console.log(e);
        startElement = e.target;
        if (e.target.classList.contains("anchor-top")) {
            connectionType = "anchor-top";
        }
        if (e.target.classList.contains("anchor-right")) {
            connectionType = "anchor-right";
        }
        if (e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }

    function handleMouseOver(e) {
        console.log(e);
        endElement = e.target;
        if (startElement !== false && endElement !== false) {
            createConnection(startElement, endElement, connectionType);
        }
        if (e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }

    function createElement(classNames, width, height, html, anchortype = "both", left = (1 + teaEditor.scrollLeft) + "px", top = (1 + teaEditor.scrollTop) + "px", draggable = true) {
        let el = document.createElement("div");
        el.style.left = left;
        el.style.top = top;
        el.style.width = width;
        el.style.height = height;
        el.className = classNames;
        el.setAttribute("draggable", "true");

        // Set inner html
        if (html != null) {
            el.innerHTML = html;
        }

        // Create anchors.
        if (anchortype === "topbottom") {
            let topAnchor = document.createElement("div");
            topAnchor.className = "anchor anchor-top";
            topAnchor.addEventListener('mousedown', handleMouseDown, false);
            el.append(topAnchor);
            let bottomAnchor = document.createElement("div");
            bottomAnchor.className = "anchor anchor-bottom";
            bottomAnchor.addEventListener('mouseover', handleMouseOver, false);
            el.append(bottomAnchor);
        }
        if (anchortype === "left") {
            let leftAnchor = document.createElement("div");
            leftAnchor.className = "anchor anchor-left";
            leftAnchor.addEventListener('mouseover', handleMouseOver, false);
            el.append(leftAnchor);
        }
        if (anchortype === "right") {
            let rightAnchor = document.createElement("div");
            rightAnchor.className = "anchor anchor-right";
            rightAnchor.addEventListener('mousedown', handleMouseDown, false);
            el.append(rightAnchor);
        }
        if (anchortype === "both") {
            let leftAnchor = document.createElement("div");
            leftAnchor.className = "anchor anchor-left";
            leftAnchor.addEventListener('mouseover', handleMouseOver, false);
            el.append(leftAnchor);
            let rightAnchor = document.createElement("div");
            rightAnchor.className = "anchor anchor-right";
            rightAnchor.addEventListener('mousedown', handleMouseDown, false);
            el.append(rightAnchor);
        }
        if (anchortype === "triple") {
            let topAnchor = document.createElement("div");
            topAnchor.className = "anchor anchor-top";
            topAnchor.addEventListener('mousedown', handleMouseDown, false);
            el.append(topAnchor);
            let leftAnchor = document.createElement("div");
            leftAnchor.className = "anchor anchor-left";
            leftAnchor.addEventListener('mouseover', handleMouseOver, false);
            el.append(leftAnchor);
            let rightAnchor = document.createElement("div");
            rightAnchor.className = "anchor anchor-right";
            rightAnchor.addEventListener('mousedown', handleMouseDown, false);
            el.append(rightAnchor);
        }
        if (anchortype === "triplebottom") {
            let bottomAnchor = document.createElement("div");
            bottomAnchor.className = "anchor anchor-bottom";
            bottomAnchor.addEventListener('mouseover', handleMouseOver, false);
            el.append(bottomAnchor);
            let leftAnchor = document.createElement("div");
            leftAnchor.className = "anchor anchor-left";
            leftAnchor.addEventListener('mouseover', handleMouseOver, false);
            el.append(leftAnchor);
            let rightAnchor = document.createElement("div");
            rightAnchor.className = "anchor anchor-right";
            rightAnchor.addEventListener('mousedown', handleMouseDown, false);
            el.append(rightAnchor);
        }
        if (anchortype === "all") {
            let topAnchor = document.createElement("div");
            topAnchor.className = "anchor anchor-top";
            topAnchor.addEventListener('mousedown', handleMouseDown, false);
            el.append(topAnchor);
            let bottomAnchor = document.createElement("div");
            bottomAnchor.className = "anchor anchor-bottom";
            bottomAnchor.addEventListener('mouseover', handleMouseOver, false);
            el.append(bottomAnchor);
            let leftAnchor = document.createElement("div");
            leftAnchor.className = "anchor anchor-left";
            leftAnchor.addEventListener('mouseover', handleMouseOver, false);
            el.append(leftAnchor);
            let rightAnchor = document.createElement("div");
            rightAnchor.className = "anchor anchor-right";
            rightAnchor.addEventListener('mousedown', handleMouseDown, false);
            el.append(rightAnchor);
        }


        if (draggable) {
            attachAllDragEvents(el);
        }
        return el;
    }

    // Tea
    function createStart() {
        let el = createElement("tea-component tea-start", "32px", "32px", null, "right");
        teaArea.append(el);
    }

    function createAction() {
        let el = createElement("tea-component tea-action", "150px", "80px", null, "triple");
        teaArea.insertBefore(el, teaArea.childNodes[0]);
    }

    function createStop() {
        let el = createElement("tea-component tea-stop", "32px", "32px", null, "left");
        teaArea.insertBefore(el, teaArea.childNodes[0]);
    }

    let connections = [];
    function renderConnections() {
        // Grab the SVG
        let svg = document.getElementById("tea-editor-arrows");
        svg.innerHTML = ''
        
        // Setup lines.
        let html = '';
        connections.forEach(function (connection, index) {
            let addLeft = 0;
            let addTop = 0;
            let addEndLeft = 0;
            let addEndTop = 0;
            if (connection.connectionType === "anchor-top") {
                addLeft = (connection.startElement.parentNode.clientWidth / 2);
                addTop = 0;
                addEndLeft = (connection.endElement.parentNode.clientWidth / 2);
                addEndTop = connection.endElement.parentNode.clientHeight;
            } 
            if (connection.connectionType === "anchor-right") {
                addLeft = connection.startElement.parentNode.clientWidth;
                addTop = (connection.startElement.parentNode.clientHeight / 2);
                addEndLeft = 0;
                addEndTop = (connection.endElement.parentNode.clientHeight / 2);
            }
            let left = connection.startElement.parentNode.offsetLeft + addLeft;
            let top = connection.startElement.parentNode.offsetTop + addTop;
            let outerleft = connection.endElement.parentNode.offsetLeft + addEndLeft;
            let outertop = connection.endElement.parentNode.offsetTop + addEndTop;
            let style = ""
            if (connection.endElement.parentNode.classList.contains("tea-archimate")) {
                style = "style=\"stroke-dasharray:5,5\"";
            }
            html += '<line ' + style + ' x1="' + left + '" y1="' + top + '" x2="' + outerleft + '" y2="' + outertop + '" stroke="black"/>'
        });
        svg.innerHTML = html;
    }
    function createConnection(start, end, conntype) {

        // Push new connection
        connections.push({
            startElement: start,
            endElement: end,
            connectionType: conntype
        });
        
        // Reset connection elements
        startElement = false;
        endElement = false;
        connectionType = false;
        
        // Grab the SVG
        renderConnections();

    }

    function createVariable() {
        let el = createElement("tea-component tea-variable", "32px", "32px", `<svg width="32" height="32" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(1,0,0,1,-25.8741,15.3846)">
        <path d="M417.022,326.573C432.213,305.737 440.21,282.102 440.21,258.042C440.21,182.395 362.657,120.979 267.133,120.979C171.609,120.979 94.056,182.395 94.056,258.042C94.056,282.102 102.053,305.737 117.244,326.573L417.022,326.573Z" style="fill:rgb(255,234,203);stroke:rgb(255,181,92);stroke-width:19.52px;"/>
    </g>
</svg>`, 'none');
        teaArea.insertBefore(el, teaArea.childNodes[0]);
    }

    function createImport() {
        let el = createElement("tea-component tea-import", "32px", "32px", `<svg width="32" height="32" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(1.28226,0,0,1,-97.5271,-23.0769)">
        <path d="M267.483,90.909C267.483,90.909 137.413,228.217 137.413,287.063C137.413,379.113 195.695,453.846 267.483,453.846C339.27,453.846 397.552,379.113 397.552,287.063C397.552,228.217 267.483,90.909 267.483,90.909Z" style="fill:rgb(255,203,245);stroke:rgb(255,92,213);stroke-width:16.98px;"/>
    </g>
</svg>`, 'none');
        teaArea.insertBefore(el, teaArea.childNodes[0]);
    }

    // ArchiMate 3.1
    function createArchiMateResource() {
        let el = createElement("tea-component tea-archimate tea-archimate-resource", "119px", "54px", `<svg width="119" height="54" viewBox="0 0 119 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:10;">
        <g transform="matrix(1,0,0,1,-1.69362,-1.60709)">
            <g transform="matrix(1,0,0,1,-8.30638,-8.39291)">
                <rect x="10" y="10" width="119" height="54" style="fill:rgb(245,222,170);"/>
            </g>
            <g transform="matrix(1,0,0,1,-8.30638,-8.39291)">
                <clipPath id="_clip1">
                    <rect x="9" y="9" width="122" height="57"/>
                </clipPath>
                <g clip-path="url(#_clip1)">
                    <rect x="10" y="10" width="119" height="54" style="fill:none;stroke:rgb(20,14,0);stroke-width:1px;"/>
                </g>
            </g>
            <g transform="matrix(1,0,0,1,-8.30638,-8.39291)">
                <path d="M125,18.5C125,17.672 124.328,17 123.5,17L111.5,17C110.672,17 110,17.672 110,18.5L110,25.5C110,26.328 110.672,27 111.5,27L123.5,27C124.328,27 125,26.328 125,25.5L125,18.5Z" style="fill:none;stroke:black;stroke-width:1px;"/>
            </g>
            <g transform="matrix(1,0,0,1,-8.30638,-8.39291)">
                <clipPath id="_clip2">
                    <rect x="9" y="9" width="122" height="57"/>
                </clipPath>
                <g clip-path="url(#_clip2)">
                    <path d="M127,20.5C127,20.224 126.776,20 126.5,20L125.5,20C125.224,20 125,20.224 125,20.5L125,23.5C125,23.776 125.224,24 125.5,24L126.5,24C126.776,24 127,23.776 127,23.5L127,20.5Z" style="fill:none;stroke:black;stroke-width:1px;"/>
                </g>
            </g>
            <g transform="matrix(1,0,0,1,-8.30638,-8.39291)">
                <path d="M113,19L113,25M116,19L116,25M119,19L119,25" style="fill:none;stroke:black;stroke-width:1px;"/>
            </g>
        </g>
    </svg><input class="tea-archimate-innertext" contenteditable="true" value="resource">`, "topbottom");
        teaArea.insertBefore(el, teaArea.childNodes[0]);
    }

    function createArchiMateCapability() {
        let el = createElement("tea-component tea-archimate tea-archimate-capability", "120px", "55px", `<svg width="120" height="55" viewBox="0 0 120 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:10;">
        <g transform="matrix(1,0,0,1,-200.538,-9.5617)">
            <path d="M320,20C320,14.481 315.519,10 310,10L211,10C205.481,10 201,14.481 201,20L201,54C201,59.519 205.481,64 211,64L310,64C315.519,64 320,59.519 320,54L320,20Z" style="fill:rgb(245,222,170);"/>
        </g>
        <g transform="matrix(1,0,0,1,-200.538,-9.5617)">
            <g>
                <path d="M320,20C320,14.481 315.519,10 310,10L211,10C205.481,10 201,14.481 201,20L201,54C201,59.519 205.481,64 211,64L310,64C315.519,64 320,59.519 320,54L320,20Z" style="fill:none;stroke:black;stroke-width:1px;"/>
            </g>
        </g>
        <g>
            <g transform="matrix(1,0,0,1,-200.538,-9.5617)">
                <rect x="312" y="15" width="4" height="4" style="fill:none;stroke:black;stroke-width:1px;"/>
            </g>
            <g transform="matrix(1,0,0,1,-200.538,-9.5617)">
                <rect x="308" y="19" width="4" height="4" style="fill:none;stroke:black;stroke-width:1px;"/>
            </g>
            <g transform="matrix(1,0,0,1,-200.538,-9.5617)">
                <rect x="312" y="19" width="4" height="4" style="fill:none;stroke:black;stroke-width:1px;"/>
            </g>
            <g transform="matrix(1,0,0,1,-200.538,-9.5617)">
                <rect x="304" y="23" width="4" height="4" style="fill:none;stroke:black;stroke-width:1px;"/>
            </g>
            <g transform="matrix(1,0,0,1,-200.538,-9.5617)">
                <rect x="308" y="23" width="4" height="4" style="fill:none;stroke:black;stroke-width:1px;"/>
            </g>
            <g transform="matrix(1,0,0,1,-200.538,-9.5617)">
                <rect x="312" y="23" width="4" height="4" style="fill:none;stroke:black;stroke-width:1px;"/>
            </g>
        </g>
    </svg><input class="tea-archimate-innertext" contenteditable="true" value="capability">`, "topbottom");
        teaArea.insertBefore(el, teaArea.childNodes[0]);
    }

    function createArchiMateValueStream() {
        let el = createElement("tea-component tea-archimate tea-archimate-value-stream", "120px", "55px", `<svg width="120" height="55" viewBox="0 0 120 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <g transform="matrix(1,0,0,1,0.5,0.5)">
            <g transform="matrix(1,0,0,1,-393,-10)">
                <path d="M512,20C512,14.481 507.519,10 502,10L403,10C397.481,10 393,14.481 393,20L393,54C393,59.519 397.481,64 403,64L502,64C507.519,64 512,59.519 512,54L512,20Z" style="fill:rgb(245,222,170);stroke:black;stroke-width:1px;"/>
            </g>
            <g transform="matrix(1,0,0,1,-394.138,-10.6114)">
                <path d="M494,17L504,17L509,22L504,27L494,27L499,22L494,17Z" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:1px;stroke-linejoin:miter;stroke-miterlimit:10;"/>
            </g>
        </g>
    </svg><input class="tea-archimate-innertext" contenteditable="true" value="value stream">`, "topbottom");
        teaArea.insertBefore(el, teaArea.childNodes[0]);
    }

    function createArchiMateCourseOfAction() {
        let el = createElement("tea-component tea-archimate tea-archimate-course-of-action", "120px", "55px", `<svg width="120" height="55" viewBox="0 0 120 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <g transform="matrix(1,0,0,1,-9.5,-93.6827)">
            <path d="M129,104C129,98.481 124.519,94 119,94L20,94C14.481,94 10,98.481 10,104L10,138C10,143.519 14.481,148 20,148L119,148C124.519,148 129,143.519 129,138L129,104Z" style="fill:rgb(245,222,170);stroke:black;stroke-width:1px;"/>
        </g>
        <g transform="matrix(1,0,0,1,-9.5,-93.6827)">
            <path d="M107.6,106L113.6,107L110.6,112.2"/>
        </g>
        <g transform="matrix(1,0,0,1,-9.5,-93.6827)">
            <path d="M110.5,109C108.074,109 105.997,110.742 105.576,113.132" style="fill:none;stroke:black;stroke-width:2px;stroke-linejoin:miter;stroke-miterlimit:10;"/>
        </g>
        <g transform="matrix(1,0,0,1,-9.5,-93.6827)">
            <path d="M126,103.5C126,99.91 123.09,97 119.5,97C115.91,97 113,99.91 113,103.5C113,107.09 115.91,110 119.5,110C123.09,110 126,107.09 126,103.5ZM123.5,103.5C123.5,101.291 121.709,99.5 119.5,99.5C117.291,99.5 115.5,101.291 115.5,103.5C115.5,105.709 117.291,107.5 119.5,107.5C121.709,107.5 123.5,105.709 123.5,103.5ZM121,103.5C121,102.672 120.328,102 119.5,102C118.672,102 118,102.672 118,103.5C118,104.328 118.672,105 119.5,105C120.328,105 121,104.328 121,103.5ZM120,103.5C120,103.224 119.776,103 119.5,103C119.224,103 119,103.224 119,103.5C119,103.776 119.224,104 119.5,104C119.776,104 120,103.776 120,103.5Z" style="fill:none;stroke:black;stroke-width:1.2px;stroke-linejoin:miter;stroke-miterlimit:10;"/>
        </g>
    </svg><input class="tea-archimate-innertext" contenteditable="true" value="course of action">`, "topbottom");
        teaArea.insertBefore(el, teaArea.childNodes[0]);
    }
    // Init
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

    // Tea
    Tea.connect('start', document.getElementById('tea-start'));
    Tea.connect('stop', document.getElementById('tea-stop'));
    Tea.connect('action', document.getElementById('tea-action'));
    Tea.connect('variable', document.getElementById('tea-variable'));
    Tea.connect('import', document.getElementById('tea-import'));

    // ArchiMate 3.1
    Tea.connect('archimate-resource', document.getElementById('tea-archimate-resource'));
    Tea.connect('archimate-capability', document.getElementById('tea-archimate-capability'));
    Tea.connect('archimate-value-stream', document.getElementById('tea-archimate-value-stream'));
    Tea.connect('archimate-course-of-action', document.getElementById('tea-archimate-course-of-action'));

});