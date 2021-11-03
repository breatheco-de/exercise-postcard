---
tutorial: https://www.youtube.com/watch?v=ZRc2vUF92e8
---

## `11.2` Header Styles

```txt
⚠️ Note: We are going to be a little bit more flexible with the tests 
because we want to leave you space to try things on your own, please 
compare your website preview with the expected image and keep trying!
```

If you build your website and preview you will come to the following conclusions:

1. The image needs to be on the right instead of below the title.
2. We need to make the image smaller.

To move the image towards the right we can use the `display:flex`. 
When you apply the `display:flex` property to any div, all its childs will organize horizontally instead of vertically (like default).

![display flex vs block](../assets/display-block-vs-flex.png?raw=true)

On the other hand, to make the image smaller we have to use `width` and `height` css properties.
## Instructions

1. Apply a `display:flex` property to the `.postcard-header`.
2. Apply a smaller width and height to the `image` tag located inside the `.postcard-header`, you can make it a lot smaller, maybe `50px x 50px`
3. Make the h1 a lot wider to push the image towards the right side of the postcard.
4. Remove margins from the h1

At the end your exercise should look similar to this one:

![Preview](../assets/header-styles.png?raw=true)
