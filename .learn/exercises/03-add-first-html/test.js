const fs = require("fs");

test("The file index.html should exist", function(){
    const indexExists = fs.existsSync("index.html");
    expect(indexExists).toBe(true);
})

test("Add the following HTML to your index.html: Hello from <strong>Earth</strong>", function(){
    const content = fs.readFileSync("index.html", 'utf8')
    const expected = /\s*Hello\s*from\s*<strong>\s*Earth\s*<\/strong>\s*/;
    expect(content).toEqual(expect.stringMatching(expected));
})