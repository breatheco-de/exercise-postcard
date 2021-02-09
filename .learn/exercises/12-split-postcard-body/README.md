## `12` Split the postcard body

We also have to divid the postcard-body in two more divs because we need to put them one on the side of the other, this can only be done using separate divs.

![Split Postcard Body](https://github.com/breatheco-de/exercise-postcard/blob/learnpack/.learn/assets/12-split-postcard-body.gif?raw=true)

# 📝 Instructions

Include two new divs inside the `.postcard-body` div, these two divs hace to be siblings of each other (same level) but they both share the same parent divs (postcard-body is the parent).

```
- .postcard
    - .postcard-header
    - .postcard-body
        - .body-left
        - .body-right
    - .postcard-footer
```

The first of this two divs must have the class `body-left` and the other `body-right`.