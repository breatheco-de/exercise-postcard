const fs = require("fs");
const path = require("path");
const { fromFile, fromHTML } = require("../../utils");
const dom = fromFile();

test("Make sure you have your index.html", function(){
    const indexExists = fs.existsSync(`./index.html`);
    expect(indexExists).toBe(true);
})

test("The website <body></body> tags must not be empty", function(){
    const empty = dom.isEmpty()
    expect(empty).toBe(false);
})

test("Make sure there is a div with the class postcard", function(){
    const linkTag = dom.querySelector("div.postcard")
    expect(linkTag).not.toBe(null);
})

test("Make sure the div with class postcard is inside the body tags", function(){
    const found = dom.insideTags('body').querySelector("div.postcard")
    expect(found).not.toBe(null);
})