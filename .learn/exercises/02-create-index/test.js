const fs = require("fs");


test("The file index.html should exist", function(){
    const indexExists = fs.existsSync("index.html");
    expect(indexExists).toBe(true);
})