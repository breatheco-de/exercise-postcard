# `12.1` Body Content

¿Qué elementos deben estar en el `postcard-body`? ¿Puedes identificarlos de acuerdo a los `<tags>` ya mencionados?

💻 Posibles opciones: Headings (h1, h2, h3, etc.), Párrafos, Imágenes, Divs, Inputs, Checkbox, etc.

![Postcard body content](../../assets/12.1-body-content.gif)

Ahora debemos crear los tags HTML necesarios para terminar el contenido de tu `.postcard` y aplicar los estilos que faltan para que se parezca a la imagen.

## 📝 Instrucciones:

1. El primer `<p>` no necesita `margin-top` (margen superior), así que debes eliminarlo.

```css
.body-left p:first-child {
	margin-top: x;
}
```

2. El `.body-left` y `.body-right` deben tener un `padding` (relleno) para separar el texto del borde de las cajas. 

```css
.body-left,
.body-right {
	padding: x;
}
```

3. Los inputs (entradas) deben tener un `border-bottom` (borde de abajo) `grey` (gris), pero no deben tener bordes a los lados ni arriba, así que prueba con `border: none` y luego `border-bottom`.

```css
input {
	border: x;
	border-bottom: x;
}
```

4. Los párrafos pueden tener un `font-size` particular.

## Resultado Esperado:

+ Así debería verse tu sitio web:

![Postcard body content](../../assets/12.1.png)

## 💡 Pista:

+ Piensa en el layout (diseño) de esos tags. Los inputs estarán uno sobre el otro.
+ Esta increíble lectura te mostrará todo lo que necesitas saber sobre el tag `<input>` para completar con éxito el ejercicio https://www.w3schools.com/tags/tag_input.asp
