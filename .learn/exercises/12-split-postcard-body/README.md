---
tutorial: https://www.youtube.com/watch?v=EZ20QN091wM
---

# `12` Split Postcard Body

We also have to divide the `postcard-body` in two inner `<div>` because we need to put them **on the side** of each other, this can only be done by assigning `display: flex` to their shared parent.

![Split Postcard Body](../../assets/12-split-postcard-body.gif?raw=true)

## 📝 Instructions:

1. Add two new `<divs>` inside the `.postcard-body` div. Both must be relatives (on the same level), but have the same parent (the `postcard-body` div is the parent).

   > Note: The first `<div>` must have the `body-left` class and the one just below it must have the `body-right` class.

```txt
1 .postcard
    1.1 .postcard-header
        1.1.1 h1
        1.1.2 img
    1.2 .postcard-body
        1.2.1 .body-left
        1.2.2 .body-right
    1.3 .postcard-footer
```

2. Inside the `body-left` div write "I am the left side" and inside the `body-right` div write "I am the right side" (This is so you can visualize them better).

3. Apply the `display: flex` style to the `.postcard-body` div so that its children are arranged horizontally.

```css
.postcard-body {
	display: x;
}
```

## Expected Result:

+ This is how your website should look like: 

    ![postcard body preview](../../assets/VZS6rNiYfC.gif?raw=true)

## 💡 Hint:

+ Your HTML file should look similar to this:

```html
   <div class="postcard-body">
		<div class="body-left">--I am the left side--</div>
		<div class="body-right">--I am the right side--</div>
	</div>
```
