---
tutorial: https://www.youtube.com/watch?v=ZRc2vUF92e8
---

# `11.2` Header Styles

If you build your postcard and preview, you will come to the following conclusions:

1. The image needs to be on the right instead of below the title.

2. We need to make the image smaller.

To move the image to the right you can use the `display:flex` property. When you apply it to any `<div>`, all of its children will be arranged horizontally instead of vertically (by default).

![display flex vs block](../../assets/display-block-vs-flex.png?raw=true)

On the other hand, to make the image smaller we have to use the CSS properties: `width` and `height`.

## 📝 Instructions:

1. Apply a `display:flex` property to the `.postcard-header`.

```css
.postcard-header {
	display: x;
}
```

2. Apply to the image a smaller `width` and `height`, to make it quite a bit smaller, maybe `50px x 50px`.

```css 
.postcard-header img {
	width: x;
	height: x;
}
```

3. Make the `<h1>` much wider to push the image to the right side of the postcard. Also remove the margins from the `<h1>`.

```css
.postcard-header h1 {
	width: x;
	margin: x;
}
```

## Expected Result:

+ At the end your exercise should look similar to this one:

    ![Preview](../../assets/header-styles.png?raw=true)

>⚠️ Note: We are going to be a little bit more flexible with the tests, we want to leave you space to try things on your own. Please, compare your website preview with the expected image and keep trying!
