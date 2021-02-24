const fs = require("fs");
const path = require("path");
const { fromFile, fromHTML } = require("../../utils/dom");
const dom = fromFile();

test("Make sure you have your index.html", function(){
    const indexExists = fs.existsSync(`./index.html`);
    expect(indexExists).toBe(true);
})

test("The <html> tag must exist and it must be properly formatted", function(){
    const found = dom.tagExists('html')
    expect(found).toBe(true);
})

test("Make sure there is a <title> tag inside the <head> tag", function(){
    const found = dom.insideTags('head').insideTags('title')
    expect(found).not.toBe(null);
})