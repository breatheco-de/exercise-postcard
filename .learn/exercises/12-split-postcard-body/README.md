---
tutorial: https://www.youtube.com/watch?v=EZ20QN091wM
---

## `12` Split the postcard body

We also have to divide the postcard-body in two inner divs because we need to put them **one on the side** of the other, this can only be done by assigning `display: flex` to their shared parent.

![Split Postcard Body](../assets/12-split-postcard-body.gif?raw=true)

# 📝 Instructions

1. Include two new divs inside the `.postcard-body` div, these two divs have to be siblings of each other (same level) but they both share the same parent divs (`postcard-body` div is the parent).

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

The first of this two divs must have the class `body-left` and the other `body-right`.

2. Apply the css rule `display: flex` to the postcard-body to make both of its childs organize horizontally.

This is how your website should look like: 

![postcard body preview](../assets/VZS6rNiYfC.gif?raw=true)