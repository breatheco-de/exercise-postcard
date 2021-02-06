const fs = require("fs");


test("Add a p tag", function(){
    const indexExists = fs.existsSync("index.html");
    const content = fs.readFileSync("index.html")
    const expected = /<p>\s*Hello\s*World\s*<\/p>/;
    expect(content).toEqual(expect.stringMatching(expected));
})