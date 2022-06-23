const fs = require("fs");
const path = require("path");
const { fromFile, fromHTML } = require("../../utils/dom");
let dom = fromFile();

test("Make sure you have your index.html", function () {
    const indexExists = fs.existsSync(`./index.html`);
    expect(indexExists).toBe(true);
})

test("Make sure you created the styles.css file", function () {
    const indexExists = fs.existsSync(`./styles.css`);
    expect(indexExists).toBe(true);
})

test("Make sure your index.html contains the <head> tag", function () {
    const _dom = dom.insideTags('head')
    expect(_dom).not.toBe(null);
})

test("Create a .postcard selector on your stylesheet", function () {
    dom = dom.withStylesheet();
    dom.selector('.postcard')
})

test("The .postcard class should have a white background", function () {
    dom = dom.withStylesheet();
    let result, result2 = false
    try {

        result = dom.selector('.postcard').hasStyles({
            background: "white"
        })

    } catch (error) {

    }
    try {
        result2 = dom.selector('.postcard').hasStyles({
            "background-color": "white"
        })
    } catch (error) {

    }

    expect(result || result2).toBe(true)
})

test("The .postcard class should have 400px of width", () => {
    dom = dom.withStylesheet();
    let result = false
    try {
        result = dom.selector('.postcard').hasStyles({
            width: "400px"
        })
    } catch (error) {

    }
    expect(result).toBe(true)
})

test("The .postcard class should have 300px of height", () => {
    dom = dom.withStylesheet();
    let result = false
    try {
        result = dom.selector('.postcard').hasStyles({
            height: "300px"
        })
    } catch (error) {

    }
    expect(result).toBe(true)
})

test("The .postcard class should have margin auto", () => {
    dom = dom.withStylesheet();
    let result = false
    try {
        result = dom.selector('.postcard').hasStyles({
            margin: "auto"
        })
    } catch (error) {

    }
    expect(result).toBe(true)
})