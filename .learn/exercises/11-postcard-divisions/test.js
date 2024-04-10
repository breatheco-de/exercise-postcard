const fs = require("fs");
const path = require("path");
const { fromFile, fromHTML } = require("../../utils/dom");
let dom = fromFile();

test("Make sure you have your index.html", function(){
    const indexExists = fs.existsSync(`./index.html`);
    expect(indexExists).toBe(true);
})

test("Make sure you created the styles.css file", function(){
    const indexExists = fs.existsSync(`./styles.css`);
    expect(indexExists).toBe(true);
})

test("Make sure your index.html contains the <link> tag", function(){
    const content = fs.readFileSync("./index.html", 'utf8')
    document.documentElement.innerHTML = content.toString();
    const linkTag = _document.querySelector("link")
    expect(linkTag).not.toBe(null);
})

test("Create a div with class postcard-header as child of .postcard", function(){
    const e=dom.querySelector('.postcard').inside().querySelector('.postcard-header')
    expect(e).toBeTruthy();
})

test("Create a div with class postcard-body as child of .postcard", function(){
    dom = fromFile();
    const e=dom.querySelector('.postcard').inside().querySelector('.postcard-body')
    expect(e).toBeTruthy();
})

test("Create a div with class postcard-footer as child of .postcard", function(){
    dom = fromFile();
    const e=dom.querySelector('.postcard').inside().querySelector('.postcard-footer')
    expect(e).toBeTruthy();
})
