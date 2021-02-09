const fs = require("fs");
const path = require("path");

test("Make sure you have your index.html", function(){
    const indexExists = fs.existsSync(`./index.html`);
    expect(indexExists).toBe(true);
})

test("Make sure you created the styles.css file", function(){
    const indexExists = fs.existsSync(`./styles.css`);
    expect(indexExists).toBe(true);
})

test("Make sure your styles.css contains the expected style", function(){
    const content = fs.readFileSync("./styles.css", 'utf8')
    const expected = /body\s*{\s*background\s*:\s*black\s*;\s*}/;
    expect(content).toEqual(expect.stringMatching(expected));
})

test("Make sure your index.html contains the <link> tag", function(){
    const content = fs.readFileSync("./index.html", 'utf8')
    document.documentElement.innerHTML = content.toString();
    const linkTag = _document.querySelector("link")
    expect(linkTag).not.toBe(null);
})

test("Make sure the <link> tag is a child (inside) of the <head></head> tags", function(){
    const content = fs.readFileSync("./index.html", 'utf8')
    document.documentElement.innerHTML = content.toString();
    const linkTag = _document.querySelector("head link")
    expect(linkTag).not.toBe(null);
})