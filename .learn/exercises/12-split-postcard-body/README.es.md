## `12` Diviendo el body de la postcard

También tenemos que dividir el body de la postcard o postal, es decir hay que añadirle dos divs más al postcard-body para ponerlos uno al lado del otro, esto solo puedes lograrlo usando dos divs separados.

![Split Postcard Body](https://github.com/breatheco-de/exercise-postcard/blob/learnpack/.learn/assets/12-split-postcard-body.gif?raw=true)

# 📝 Instrucciones

1. Agrega dos nuevos divs dentro del div `.postcard-body`, estos dos divs deben ser parientes (estar en el mismo nivel) pero tener el mismo div padre (el div `postcard-body`es el padre).

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

2. Apply the css rule `display: flex` to the postcard-body to make its childs organize horizontally.

This is how your website should look like this: 

![postcard body preview](https://github.com/breatheco-de/exercise-postcard/blob/learnpack/.learn/assets/VZS6rNiYfC.gif?raw=true)