const fs = require("fs");
const path = require("path");

test("Build your website using the build icon on the top of the instructions", function(){
    const dirPath = path.join(__dirname, '/../../dist');
    const files = fs.readdirSync(dirPath);
    const indexExists = fs.existsSync(`${dirPath}/index.html`);
    expect(indexExists).toBe(true);
})

test("Add the following HTML to your index.html: Hello from <strong>Earth</strong>", function(){
    const content = fs.readFileSync("index.html", 'utf8')
    const expected = /\s*Hello\s*from\s*<strong>\s*Earth\s*<\/strong>\s*/;
    expect(content).toEqual(expect.stringMatching(expected));
})