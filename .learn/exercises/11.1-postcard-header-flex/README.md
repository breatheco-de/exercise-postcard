## `11.1` Flex Property

Whenever you want two HTML elements to be one on the side of the other you have to apply the `display: flex.` CSS property to a common parent of both divs, it's the fastest way.

```html
<div> <!-- ⬅ The parent div must have display: flex; -->
    <div>I will be on the left</div>
    <div>I will be on the right</div>
</div>
```

Go to your CSS and apply the display: flex; property to `.postcard-body` and `.postcard-head` classes.