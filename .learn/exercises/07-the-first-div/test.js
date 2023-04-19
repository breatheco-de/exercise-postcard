const fs = require("fs");
const path = require("path");
const { fromFile, fromHTML } = require("../../utils/dom");
const dom = fromFile();

test("Make sure you have your index.html", function(){
    const indexExists = fs.existsSync(`./index.html`);
    expect(indexExists).toBe(true);
})

test("The website <body></body> tags must not be empty", function(){
    const empty = dom.isEmpty()
    expect(empty).toBe(false);
})

test("Your <body> and or </body> tags should not be duplicated", function(){
    expect(() => {
        const duplicated = dom.insideTags('body').tagExists('body')

    }).toThrow()
})

test("There should be at least one <div> with class postcard inside the <body> and the <body> tag must be inside the <html> tag", function(){
    const div = dom.insideTags('html').querySelector('div')
    expect(div.className.includes('postcard')).toBe(true)
})

test("Make sure there is a <div> with the class postcard", function(){
    const linkTag = dom.querySelector("div.postcard")
    expect(linkTag).not.toBe(null);
})

test("Make sure the <div> with class postcard is inside the <body> tags", function(){
    const found = dom.insideTags('body').querySelector("div.postcard")
    expect(found).not.toBe(null);
})

test("The tag </html> should be the last character in your code", function(){
    const found = dom.validateStructure()
    expect(found).toBe(true);
})
