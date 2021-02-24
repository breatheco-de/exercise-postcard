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

test("The name of the file is styles.css in plural", function(){
    const indexExists = fs.existsSync(`./style.css`);
    expect(indexExists).not.toBe(true);
})

test("Make sure your styles.css contains the expected style", function(){
    const content = fs.readFileSync("./styles.css", 'utf8')
    const expected = /body\s*{\s*background\s*:\s*black\s*;\s*}/;
    expect(content).toEqual(expect.stringMatching(expected));
})