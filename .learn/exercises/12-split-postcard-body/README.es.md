# `12` Split Postcard Body

También tenemos que dividir el **body** del postcard, es decir, hay que añadirle dos `<div>` más al `postcard-body` para ponerlos uno al lado del otro. Esto solo puedes lograrlo usando dos divs separados.

![Split Postcard Body](../../assets/12-split-postcard-body.gif?raw=true)

## 📝 Instrucciones:

1. Agrega dos nuevos `<divs>` dentro del div `.postcard-body`. Ambos deben ser parientes (estar en el mismo nivel), pero tener el mismo padre (el div `postcard-body` es el padre).

   > Nota: El primer `<div>` debe tener la clase `body-left` y el que está justo debajo debe tener la clase `body-right`.

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

2. Dentro del div `body-left` escribe "soy el lado izquierdo" y dentro del div `body-right` escribe "soy el lado derecho" (Esto es para que puedas visualizarlos mejor).

3. Aplica el estilo `display: flex` a el div `.postcard-body` para que sus hijos se organicen horizontalmente.

```css
.postcard-body {
	display: x;
}
```

## Resultado Esperado:

+ Así es como tu website debe lucir después de estos cambios:

    ![postcard body preview](../../assets/VZS6rNiYfC.gif?raw=true)

## 💡 Pista:

+ Algo así debería de verse en tu archivo HTML.

```html
   <div class="postcard-body">
		<div class="body-left">--soy el lado izquierdo--</div>
		<div class="body-right">--soy el lado derecho--</div>
	</div>
```
