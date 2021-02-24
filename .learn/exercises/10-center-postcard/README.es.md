## `10` Centrando la Postcard

Tu sitio web está de color negro, pero tu postal o postcard debería tener un fondo blanco.

Para aplicar colores, tamaños o cualquier estilo a un elemento primero debemos especificar (o "seleccionar") el elemento en la hoja de estilos CSS.

Por ejemplo, si quieres aplicarle color un color azul a todas las etiquetas o tags `<p>`en tu sitio web puedes escribir esto en tu hoja de estilos:

```css
p{
    color: blue;
}
```
Hay tres formas de seleccionar (o especificar) los elementos a los que quieras aplicarles estilos:
- Selector `#id`: Usa el símbolo gato `#` al inicio del selector.
- Selector `.class`: Usa un punto `.`  al inicio del selector.
- Selector `tag`: No usa símbolo al inicio del selector.

## 📝 Instrucciones

Dentro de la etiqueta `<body>` hay un div con la clase o class "postcard" que será nuestra caja blanca.

Por favor crea un un selector de tipo clase (usando el punto `.`) `.postcard` dentro de tu archivo styles.css y ponle un fondo blanco o `background` white, un ancho de `400px`, una altura de `300px`y un margen o margin `auto`(para centrar horizontalmente el div).

```css
.postcard{
    // tus estilos aquí
}
```

Nota: el `margin: auto;` centrará horizontalmente la caja.

## 😄 Apreta el botón "build"

Apreta el botón "build" para que veas como va quedando tu website.