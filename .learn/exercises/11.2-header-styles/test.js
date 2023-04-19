const fs = require("fs");
const path = require("path");
const { fromFile, fromHTML } = require("../../utils/dom");
let dom = fromFile();

test("In your CSS create a .postcard-header class that will apply styles to the .postcard-header <div>", function(){
    dom = dom.withStylesheet();
    dom.selector('.postcard-header');
    expect(dom).toBeTruthy();
})

test("The .postcard-header <div> must have a display:flex to allow its childs to display horizontally", function(){
    dom = dom.withStylesheet();
    dom.selector('.postcard-header').hasStyles({
        display: "flex",
    })
})
