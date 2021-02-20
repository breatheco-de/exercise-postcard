const { fromFile, fromHTML } = require("./dom");
const path = require("path");

test("Load html file fromFile", function(){
    const dom = fromFile(path.dirname(__filename)+'/sample.html');
    expect(dom).toBeTruthy()
})

test("Wrong html path fromFile", function(){
    expect(() => {
        const dom = fromFile(path.dirname(__filename)+'/sasmple.html');
    }).toThrow()
})

test("Load from html", function(){
    const dom = fromHTML('<p>Hello World</p>');
    expect(dom).toBeTruthy()
})

test("Load from html", function(){
    const dom = fromHTML('<p>Hello World</p>');
    expect(dom.raw).toBe('<p>Hello World</p>')
    expect(dom.querySelector('p')).toBeTruthy()
})

test("querySelector", function(){
    const dom = fromHTML('<p class="red">Hello World</p>');
    expect(dom.querySelector('.red')).toBeTruthy();
})

test("dom.tagExists", function(){
    const dom = fromHTML('<body><p>Hello</p><a href="https://google.com">Bob <small>Dylan</small></a></body>');
    expect(dom.tagExists('p')).toBeTruthy();
    expect(dom.tagExists('a')).toBeTruthy();
})

test("dom.insideTag", function(){
    const dom = fromHTML('<body><p>Hello</p><a href="https://google.com">Bob <small>Dylan</small></a></body>');
    expect(dom.insideTags('body').tagExists('p')).toBeTruthy();
    expect(dom.insideTags('a').tagExists('small')).toBeTruthy();
})

test("dom.isEmpty()", function(){
    const dom = fromHTML('<body><p>Hello</p><a href="https://google.com">Bob <small>Dylan</small></a></body>');
    expect(dom.isEmpty()).not.toBeTruthy();
    
    const dom2 = fromHTML(' ');
    expect(dom2.isEmpty()).toBeTruthy();
})
