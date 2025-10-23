---
id: 'test'
title: 'TEST EN ESPAÑOL'
description: |
  Este documento está diseñado para ejercitar una amplia gama de funciones de Markdown y ayudarte a validar la implementación de Markdown de un sitio web. Incluye encabezados, énfasis, listas, enlaces, imágenes, tablas, código, citas, reglas horizontales, notas al pie, listas de tareas, listas de definiciones, matemáticas y más. Sigue las reglas de formato especificadas para tablas, delimitadores LaTeX de matemáticas y sangría.
pubDate: 'Aug 16 2025'
coverImageCredit: 'Foto de Caleb Miller en, Unsplash'
---

Este documento está diseñado para ejercitar una amplia gama de funciones de Markdown y ayudarte a validar la implementación de Markdown de un sitio web. Incluye encabezados, énfasis, listas, enlaces, imágenes, tablas, código, citas, reglas horizontales, notas al pie, listas de tareas, listas de definiciones, matemáticas y más. Sigue las reglas de formato especificadas para tablas, delimitadores LaTeX de matemáticas y sangría.

---

## Encabezados

# Encabezado Nivel 1

## Encabezado Nivel 2

### Encabezado Nivel 3

#### Encabezado Nivel 4

##### Encabezado Nivel 5

###### Encabezado Nivel 6

---

## Párrafos y saltos de línea

Este es un párrafo estándar con varias oraciones para probar el ajuste y el espaciado.
Esta línea usa dos espacios al final para forzar un salto de línea.
Otro salto de línea forzado aquí.

Un nuevo párrafo después de una línea en blanco.

---

## Énfasis

- Cursiva: _texto_ o _texto_
- Negrita: **texto** o **texto**
- Negrita cursiva: **_texto_** o **_texto_**
- Combinado: Esto es **negrita**, esto es _cursiva_ y esto es **_ambos_**.

---

## Elementos en línea

- Código en línea: `console.log("Hello, world!")`
- Caracteres escapados: \*, \_, \`, \|, \\, \[, \], \(, \)
- Estilo superíndice: E = mc^2^ (acento circunflejo en texto plano)
- Estilo subíndice: H2O (texto plano)

---

## Enlaces

- Enlace en línea: [Raycast](https://www.raycast.com)
- Enlace en línea con título: [OpenAI](https://www.openai.com 'OpenAI Homepage')
- Enlace con referencia: [Buscador][g]
- Enlace automático: <https://example.com>

[g]: https://google.com 'Google'

---

## Imágenes

- Imagen en línea con texto alternativo: ![Texto alternativo que describe la imagen](https://placehold.co/300x120.png?text=Markdown+Test 'Placeholder')
- Imagen como enlace: [![Insignia](https://placehold.co/100x30?text=Badge)](https://example.com)

---

## Tablas

| Función          | Soportado | Notas                             |
| :--------------- | :-------- | :-------------------------------- |
| Encabezados      | Sí        | H1–H6                             |
| Énfasis          | Sí        | Negrita, cursiva, negrita-cursiva |
| Enlaces          | Sí        | En línea y con referencia         |
| Imágenes         | Sí        | Texto alternativo y título        |
| Tablas           | Sí        | Alineación y encabezados          |
| Código           | Sí        | En línea y con bloque cercado     |
| Citas            | Sí        | Soporte anidado                   |
| Listas           | Sí        | Ordenadas y desordenadas          |
| Listas de tareas | Sí        | Casillas de verificación          |
| Notas al pie     | Sí        | Referencias y listado             |
| Matemáticas      | Quizá     | Depende del soporte del sitio     |

| Centrado | Derecha | Izquierda |
| :------: | ------: | :-------- |
|    A     |       1 | alfa      |
|    B     |       2 | beta      |
|    C     |       3 | gamma     |

---

## Listas

- Lista desordenada
- Elemento anidado nivel 2
  - Elemento anidado nivel 3
- Volver a nivel 2
- Otro elemento de nivel superior

1. Elemento de lista ordenada uno
   1. Elemento ordenado anidado 1.1
      1. Elemento ordenado anidado 1.1.1
   2. Elemento ordenado anidado 1.2
2. Elemento de lista ordenada dos

- Lista mixta


    1. Número dentro de viñetas
    2. Otro más

- Continuar viñetas

---

## Listas de tareas

- [x] Tarea completada
- [ ] Tarea incompleta
- [x] Subtarea hecha
- [ ] Subtarea pendiente
- [ ] Elemento final

---

## Citas

> Esta es una cita simple para probar el renderizado.
>
> - Puede contener listas
> - Y otros elementos en línea como `code` y texto en **negrita**
>
> Cita anidada:
>
> > Cita de nivel 2
> >
> > > Cita de nivel 3

---

## Código

- En línea: `let x = 42;`

- Bloques de código cercados:


    ```javascript
    // Ejemplo en JavaScript
    function greet(name) {
        console.log(`Hello, ${name}!`);
    }
    greet("World");
    ```

    ```python
    # Ejemplo en Python
    from math import sqrt

    def hypotenuse(a, b):
        return sqrt(a*a + b*b)

    print(hypotenuse(3, 4))
    ```

    ```bash
    # Ejemplo en Bash
    set -euo pipefail
    echo "Testing Markdown"
    mkdir -p build && cd build
    ```

- Bloque de código con sangría (4 espacios):

  if (true) {
  return "Indented code block";
  }

---

## Reglas horizontales

---

---

---

---

## Notas al pie

Aquí hay una afirmación con una referencia de nota al pie.[^1] Y otra aquí.[^nota]

[^1]: Esta es la primera nota al pie. Puede contener varias oraciones e incluso enlaces como [Ejemplo](https://example.com).

[^nota]: Segunda nota al pie con detalles adicionales.

---

## Lista de definiciones

Término
: Definición del término con una breve explicación.

Término más largo
: Una definición más detallada
: Con múltiples líneas de definición.

---

## Caracteres especiales y escapes

- Tubos en tablas: usa \| dentro de celdas.
- Comillas invertidas en código: ``Usa `así` o tres comillas invertidas para bloques``.
- Corchetes: \[escapado\] \(escapado\) \{escapado\}
- Rayas: — (em dash) y – (en dash) en texto plano
- Comillas: "dobles", 'simples'

---

## Matemáticas (LaTeX)

- Matemáticas en línea: \(E = mc^2\), \(a^2 + b^2 = c^2\), \(\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}\)

- Matemáticas en bloque:

\[y = x^2 + 3x + c\]

\[\int\_{0}^{\infty} e^{-x^2} \, dx = \frac{\sqrt{\pi}}{2}\]

\[\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}
\end{aligned}\]

---

## Paso de HTML (si se permite)

Nota: Algunos motores de Markdown saneam HTML. Esta sección prueba si se permite HTML sin procesar.

<div style="padding:8px;border:1px solid #ccc;">
    <strong>Bloque HTML sin procesar:</strong> Este es un div con estilo con <em>énfasis</em> y <code>código en línea</code>.
</div>

---

## Ajuste de texto largo

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, nisl non rutrum iaculis, lorem elit vulputate lorem, at egestas purus libero nec mauris. Cras dictum, risus vitae feugiat rhoncus, augue orci imperdiet nunc, non sollicitudin arcu orci quis arcu. Mauris congue, urna in viverra ultricies, justo ex commodo neque, et rhoncus massa urna id turpis.

---

## Casos límite

- Espacios finales al final de la línea para activar saltos de línea.
- Múltiples líneas en blanco abajo:

- Líneas que comienzan con números que no son listas:
  1984 es una novela.
  2025-10-20 es una fecha.

- Prueba de escapes con barra invertida: \* \_ \` \# \! \> \<

---

## Tabla de contenido mixto

| Elemento    | Descripción                 | Ejemplo                                            |
| :---------- | :-------------------------- | :------------------------------------------------- |
| Texto       | Énfasis y enlaces           | **Negrita** y [enlace](https://example.org)        |
| Código      | En línea y bloque           | `sum(a,b)` y ver bloque abajo                      |
| Matemáticas | En línea y en bloque        | \(x^2\) y \[\sum\_{i=1}^{n} i = \frac{n(n+1)}{2}\] |
| Imagen      | Verificación de renderizado | ![Tiny](https://placehold.co/40?text=Tiny)         |

---

## Prueba de rendimiento/desbordamiento

Una cadena muy larga sin cortes:
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

Una URL larga para probar el ajuste:
https://example.com/this/is/a/very/long/url/that/might/not/wrap/well/in/some/renderers/and/should/be-tested-for-overflow-or-horizontal-scrolling

---

## Lista de verificación final

- Encabezados H1–H6 se renderizan correctamente
- Se respetan párrafos y saltos de línea
- Los estilos de énfasis funcionan
- Los enlaces e imágenes cargan
- Las tablas se renderizan con alineación
- Las listas y listas anidadas aparecen con la sangría adecuada
- Las listas de tareas muestran casillas
- Las citas y citas anidadas se renderizan
- Cercas de código con resaltado por lenguaje
- Las reglas horizontales aparecen como separadores
- Las notas al pie funcionan con referencias
- Las listas de definiciones se renderizan si son compatibles
- Las matemáticas se renderizan en línea y en bloque si son compatibles
- El HTML sin procesar se maneja según la política
- Los caracteres especiales y escapes se muestran correctamente

Fin del archivo de prueba de Markdown.
