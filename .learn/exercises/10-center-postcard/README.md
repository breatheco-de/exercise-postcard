## `10` Center Postcard

You website is black, but your postcard should have a white backgound.

To apply colors, sizes or any style to an element we need to first specify (or "select") the element in our CSS stylsheet.

For example, if you want to apply color to all the `<p>` tags in your website you can type in your stylesheet:

```css
p{
    color: blue;
}
```

There are 3 ways of selecting (or specifying) the elements you want to apply styles: 
- `#id` selector: Uses a pound `#` symbol at the beggining of the selector.
- `.class` selector: Uses a dot `.`  symbol at the beggining of the selector.
- `tag` selector: No symbol at the beggining of the selector.

## 📝 Instructions

Inside the `<body>` tag we have a div with the class "postcard" that is going to be our white box.

Please add the following code at the end of the styles.css file:

```css
.postcard{
    background: white;
    width: 400px;
    height: 300px;
    margin: auto;
}
```

Note: the `margin: auto;` will center the box horizontally.