const fs = require("fs")

const red = (msg) => `\x1b[33m${msg}\x1b[0m`
const fromFile = (path='index.html', context='') => DOM(path, null, context);
const fromHTML = (html='', context='') => DOM(null, html, context);
const DOM = (path=null, html=null, context) => {

    if(!path && !html) throw new Error('Missing path or HTML ');
    else if(!path && html==='') throw new Error("Empty HTML to parse");

    let htmlContent = html;
    if(path){
        if(!fs.existsSync(path)) throw new Error(`File ${path} does not exist`);
        htmlContent = fs.readFileSync(path, 'utf8')
    }
    document.documentElement.innerHTML = htmlContent.toString();
    let _document = document // The current version of jest doesn't fully support the stylesheets in cloned elements
    // let _document = document.cloneNode(true);

    return {
        raw: htmlContent,
        document: _document,
        withStylesheet: function(path='styles.css'){

            if(!fs.existsSync(path)) throw new Error(`File ${path} does not exist`);
            const content = fs.readFileSync(path, 'utf8')
            const head = _document.querySelector('head');
            const style = _document.createElement('style');
            _document.head.append(style);
            style.textContent = content;

            return this
        },
        selector: (name) => {
            const styles = _document.styleSheets[0].cssRules;
            context = " check the selector "+name;
            for(let i =0;i<styles.length;i++){
                if(styles[i].selectorText === name) return {
                    hasStyles: (_s) => {
                        const selector = styles[i]
                        let error = false;
                        // throw selector.style÷
                        for(let styleName in _s){
                            if(typeof(selector.style[styleName]) == 'undefined') error = `CSS rule ${styleName} is missing ${context}`
                            else if(!_s[styleName] || _s[styleName]==="") error = `You are trying to compare an empty style`;
                            else if(selector.style[styleName] === "") error = `CSS rule ${styleName} is empty ${context}`;
                            else if(selector.style[styleName] !== _s[styleName]) error = `CSS rule ${styleName} is different than expected ${selector.style[styleName]} != ${_s[styleName]} ${name}`;

                            if(error) throw red(error);
                        }
                        return true;
                    }
                }
            }
            throw red(`No selector ${name} was found on the CSS Stylesheet`)
        },
        validateStructure: function(){
            const closingHTMLIndex = this.raw.search('</html>');
            if(closingHTMLIndex == -1) throw red('There should be a closing HTML tag with no spaces just like this: </html>');
            
            let lastHTML = this.raw.substring(closingHTMLIndex + '</html>'.length);
            if(lastHTML.trim().length > 0) throw red("The closing HTML tag </html> should be the last character in your code")

            return true;
        },
        innerHTML: () => _document.body.innerHTML,
        querySelector: (selector) => {
            const node = _document.querySelector(selector);
            if(!node) throw red(`Element with css selector ${selector} don't exist `+context);

            node.inside = () => {
                if(!node.innerHTML || node.innerHTML==='') throw red(`Node ${selector} is empty inside`)
                return fromHTML(node.innerHTML, `inside ${selector}`);
            }
            return node;
        },
        firstChild(parent=null){
            if(!parent) parent = _document.body;
            
            var el = parent.firstChild
            while( el && el.nodeType !== 1 ){
                el = el.nextSibling
            }
            
            return {
                tagName: () => el.tagName
            };
        },
        tagExists: (tagName) => {
            const pattern = new RegExp(`<${tagName} *(?:[a-z_]+=["'][^'"]+["'])* *>((.|[\n\r])*)<\/ *${tagName} *>`,'im');
            const array_matches = pattern.exec(htmlContent);
            if(!array_matches) throw red(`Tags ${tagName} not found on HTML ${htmlContent}`)
            return true
        },
        insideTags: (tagName) => {
            const pattern = new RegExp(`<${tagName} *(?:[a-z_]+=["'][^'"]+["'])* *>((.|[\n\r])*)<\/ *${tagName} *>`,'im');
            const array_matches = pattern.exec(htmlContent);
            if(!array_matches) throw red(`Tags ${tagName} not found on HTML ${htmlContent}`)
            return fromHTML(array_matches[1])
        },
        isEmpty: () => {
            return typeof(_document.body.children["0"]) === "undefined" ;
        }
    }

}

module.exports = { fromFile, fromHTML }