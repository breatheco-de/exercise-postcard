const fs = require("fs");
const path = require("path");
const { fromFile, fromHTML } = require("../../utils/dom");
let dom = fromFile();

test("Make sure you have your index.html", function(){
    const indexExists = fs.existsSync(`./index.html`);
    expect(indexExists).toBe(true);
})

test("Make sure you created the styles.css file", function(){
    const indexExists = fs.existsSync(`./styles.css`);
    expect(indexExists).toBe(true);
})

test("Make sure your index.html contains the <link> tag", function(){
    const content = fs.readFileSync("./index.html", 'utf8')
    document.documentElement.innerHTML = content.toString();
    const linkTag = _document.querySelector("link")
    expect(linkTag).not.toBe(null);
})

test("Create an image inside the .postcard-header <div>", function(){
    const e=dom.querySelector('.postcard-header').inside().querySelector('img')
    expect(e).toBeTruthy();
})

test("Create an <h1> inside the .postcard-header <div>", function(){
    dom = fromFile();
    const e=dom.querySelector('.postcard-header').inside().querySelector('h1')
    expect(e).toBeTruthy();
})

test("The <h1> inside .postcard-header should say 'My Postcard'", function(){
    dom = fromFile();
    const e =dom.querySelector('.postcard-header').inside().querySelector('h1')
    expect(e.innerHTML.toLowerCase()).toEqual("My Postcard".toLowerCase());
})

test("The <img> tag should contain the given URL as src, E.g: <img src='the_image_src_goes_here' />", function(){
    dom = fromFile();
    const e =dom.querySelector('.postcard-header').inside().querySelector('img')
    expect(e.src).toEqual('https://raw.githubusercontent.com/breatheco-de/exercise-postcard/e63a7916530cc850bd92aa1c2e19191837fb5c80/.learn/assets/4geeks.png');
})
