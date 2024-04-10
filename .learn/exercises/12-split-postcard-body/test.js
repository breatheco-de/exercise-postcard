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

test("Create a <div> inside the .postcard-body and add the class .body-left to it", function(){
    const e=dom.querySelector('.postcard-body').inside().querySelector('div.body-left')
    expect(e).toBeTruthy();
})

test("Create another <div> inside the .postcard-body and add the class .body-right to it", function(){
    dom = fromFile();
    const e=dom.querySelector('.postcard-body').inside().querySelector('div.body-right')
    expect(e).toBeTruthy();
})

test("The .postcard-body CSS selector should have a display: flex", function(){
    dom = dom.withStylesheet();
    dom.selector('.postcard-body').hasStyles({
        display: "flex",
    })
})
