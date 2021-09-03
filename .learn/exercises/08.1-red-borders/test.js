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
    
    const expected = /\*\s*{\s*border\s*:\s*1px\s*dashed\s*red\s*;\s*min-height\s*:\s*10px\s*;\s*}/;
    expect(content).toEqual(expect.stringMatching(expected));
})