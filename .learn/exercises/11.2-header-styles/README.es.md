# `11.2` Header Styles

Si construyes tu postcard y previsualizas, llegarás a las siguientes conclusiones:

1. La imagen tiene que estar a la derecha en vez de debajo del título.

2. Tendremos que hacer la imagen más pequeña.

Para mover el imagen hacia la derecha puedes usar la propiedad `display:flex`. Cuando la aplicas a cualquier div, todos sus hijos se organizarán horizontalmente en vez de verticalmente (como por defecto).

![display flex vs block](../../assets/display-block-vs-flex.png?raw=true)

Por otro lado, para hacer la imagen más pequeña hay que usar propiedades css: `width` (que significa ancho) y `height` (que significa altura).

## 📝 Instrucciones:

<<<<<<< HEAD
1. Aplícale la propiedad `display:flex` al div `.postcard-header`. 

```css
.postcard-header {
	display: x;
}
```
=======
1. Aplícale la propiedad `display:flex` al div `.postcard-header`.
2. Aplícale un width (ancho) y height (alto) menor a la etiqueta o tag de la imagen ubicada dentro un del `.postcard-header`, para que sea bastante más pequeña, quizás `50px x 50px`.
3. Haz que el h1 sea mucho más ancho para empujar la imagen hacia el lado derecho del postcard.
4. Eliminar los márgenes (margins) del h1.

Una vez que termines tu ejercicio debería de verse similar a este:
>>>>>>> 7ac30d4c4ab1cd73065cb74d5404f405e257bfd5

2. Aplícale a la imagen un `width` y `height` menor, para que sea bastante más pequeña, quizás `50px x 50px`.

```css 
.postcard-header img {
	width: x;
	height: x;
}
```

3. Haz que el `<h1>` sea mucho más ancho para empujar la imagen hacia el lado derecho del postcard. También elimina los márgenes del h1.

```css
.postcard-header h1 {
	width: x;
	margin: x;
}
```

## Resultado Esperado:

+ Una vez que termines tu ejercicio debería de verse similar a este:

    ![Preview](../../assets/header-styles.png?raw=true)

```txt
⚠️ Nota: Vamos a ser un poco más flexibles con las pruebas, queremos dejarte espacio para que intentes cosas por tu cuenta. Por favor, compara la vista previa de tu sitio web con la imagen esperada y ¡sigue intentándolo!
```