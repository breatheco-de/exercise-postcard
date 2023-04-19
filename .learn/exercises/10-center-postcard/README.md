---
tutorial: https://www.youtube.com/watch?v=0Wt1n0wvSe8
---

# `10` Center Postcard

Right now your website is black, but your postcard should have a white background.

To apply colors, sizes or any style to an element we need to first specify (or "select") the element in our CSS stylesheet.

## 🔹 Example:

If we wanted to apply a blue color to all the `<p>` tags on your website, one way to do it would be to write this in your stylesheet:

```css
p {
    color: blue;
}
```

## Ways to select:

There are three ways to select (or specify) the elements you want to apply styles to:

   1. `#id` selector: Uses a pound `#` symbol at the beginning of the selector.
   2. `.class` selector: Uses a dot `.`  symbol at the beginning of the selector.
   3. `tag` selector: No symbol at the beginning of the selector.

Now that you have an idea of how it works, let's continue with the exercise... Do you agree? 😎

Inside the `<body>` tag we have a `<div>` with the `class` "postcard" that is going to be our white box.

## 📝 Instructions:

1. Create a class selector `.postcard` inside your **styles.css** file and apply:

    + The `background` white.
    + A `width` of `400px`.
    + A `height` of `300px`.
    + A `margin` of `auto`.

## 💡 Hints:

+ Your code should look something like this:

```css
.postcard {
    /* your styles here */
}
```

+ The `margin: auto;` will center the box horizontally.

## 🔎 Important:

+ Build your website to see how it's looking!
