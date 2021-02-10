const fs = require("fs");
const path = require("path");
const htmlContent = fs.readFileSync("./index.html", 'utf8')

test("Make sure you have your index.html", function(){
    const indexExists = fs.existsSync(`./index.html`);
    expect(indexExists).toBe(true);
})

test("Make sure there is a div with the class postcard inside the body tags", function(){
    document.documentElement.innerHTML = htmlContent.toString();
    const linkTag = _document.querySelector("div.postcard")
    expect(linkTag).not.toBe(null);
})