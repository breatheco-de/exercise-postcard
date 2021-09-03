## `12` Diviendo el body de la postcard

También tenemos que dividir el body de la postcard o postal, es decir hay que añadirle dos divs más al postcard-body para ponerlos uno al lado del otro, esto solo puedes lograrlo usando dos divs separados.

![Split Postcard Body](../assets/12-split-postcard-body.gif?raw=true)

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

Nota: El primer `<div>` debe tener la clase `body-left` y el que esta justo debajo debe tener la clase `body-right`.

2. Aplica el estilo `display: flex` a el div .postcard-body para que sus hijos se organicen orizontalmente.

Asi es como tu website debe lucir despues de estos cambios:

![postcard body preview](../assets/VZS6rNiYfC.gif?raw=true)