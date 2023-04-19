# `10` Center Postcard

En estos momentos tu sitio web está de color negro, pero tu postcard debería tener un fondo blanco.

Para aplicar colores, tamaños o cualquier estilo a un elemento, primero debemos especificar (o "seleccionar") el elemento en la hoja de estilos CSS.

## 🔹 Ejemplo:

Si quisiéramos aplicarle un color azul a todos los tags `<p>` en tu sitio web, una manera de hacerlo sería escribiendo esto en tu stylesheet:

```css
p {
    color: blue;
}
```

## Formas de seleccionar:

Hay tres formas de seleccionar (o especificar) los elementos a los que quieras aplicarles estilos:

   1. Selector `#id`: Usa el símbolo hashtag `#` al inicio del selector.
   2. Selector `.class`: Usa un punto `.`  al inicio del selector.
   3. Selector `tag`: No usa símbolo al inicio del selector.

Ahora que ya tienes una idea de como funciona, sigamos con el ejercicio... ¿Te parece? 😎

Dentro del tag `<body>` hay un `<div>` con el `class` (clase) "postcard", que será nuestra caja blanca.

## 📝 Instrucciones:

1. Crea un selector de tipo `class` (usando el punto `.`) `.postcard` dentro de tu archivo **styles.css** y ponle:

    + Un `background` (fondo) blanco.
    + Un `width` (ancho) de `400px`.
    + Una `height` (altura) de `300px`.
    + Un `margin` (margen) `auto`.

## 💡 Pistas:

+ Tu código debería de verse algo así:

```css
.postcard {
    /* tus estilos van aquí */
}
```

+ El `margin: auto;` centrará horizontalmente el `<div>`.

## 🔎 Importante:

+ ¡Dale clic al botón `build` para que veas como va quedando tu website!
