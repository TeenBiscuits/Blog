---
id: 'test'
title: 'TEST EN GALEGO'
description: |
  Este documento está deseñado para exercitar unha ampla gama de funcións de Markdown e axudarche a validar a implementación de Markdown dun sitio web. Inclúe cabeceiras, énfase, listas, ligazóns, imaxes, táboas, código, citas, regras horizontais, notas ao pé, listas de tarefas, listas de definicións, matemáticas e máis. Sigue as regras de formato especificadas para táboas, delimitadores LaTeX de matemáticas e sangría.
pubDate: 'Jan 16 2025'
coverImageCredit: 'Foto de Caleb Miller en, Unsplash'
---

Este documento está deseñado para exercitar unha ampla gama de funcións de Markdown e axudarche a validar a implementación de Markdown dun sitio web. Inclúe cabeceiras, énfase, listas, ligazóns, imaxes, táboas, código, citas, regras horizontais, notas ao pé, listas de tarefas, listas de definicións, matemáticas e máis. Sigue as regras de formato especificadas para táboas, delimitadores LaTeX de matemáticas e sangría.

---

## Cabeceiras

# Cabeceira Nivel 1

## Cabeceira Nivel 2

### Cabeceira Nivel 3

#### Cabeceira Nivel 4

##### Cabeceira Nivel 5

###### Cabeceira Nivel 6

---

## Parágrafos e saltos de liña

Este é un parágrafo estándar con varias oracións para probar o axuste e o espazado.
Esta liña usa dous espazos ao final para forzar un salto de liña.
Outro salto de liña forzado aquí.

Un novo parágrafo despois dunha liña en branco.

---

## Énfase

-     Cursiva: _texto_ ou *texto*
-     Negriña: __texto__ ou **texto**
-     Negriña cursiva: ___texto___ ou ***texto***
-     Combinado: Isto é **negriña**, isto é _cursiva_ e isto é ***ambos***.

---

## Elementos en liña

-     Código en liña: `console.log("Hello, world!")`
-     Caracteres escapados: \*, \_, \`, \|, \\, \[, \], \(, \)
-     Estilo superíndice: E = mc^2^ (acento circunflexo en texto plano)
-     Estilo subíndice: H2O (texto plano)

---

## Ligazóns

-     Ligazón en liña: [Raycast](https://www.raycast.com)
-     Ligazón en liña con título: [OpenAI](https://www.openai.com "OpenAI Homepage")
-     Ligazón con referencia: [Buscador][g]
-     Ligazón automática: <https://example.com>

[g]: https://google.com 'Google'

---

## Imaxes

-     Imaxe en liña con texto alternativo: ![Texto alternativo que describe a imaxe](https://placehold.co/300x120.png?text=Markdown+Test "Placeholder")
-     Imaxe como ligazón: [![Insignia](https://placehold.co/100x30?text=Badge)](https://example.com)

---

## Táboas

| Función           | Soportado | Notas                             |
| :---------------- | :-------- | :-------------------------------- |
| Cabeceiras        | Si        | H1–H6                             |
| Énfase            | Si        | Negriña, cursiva, negriña-cursiva |
| Ligazóns          | Si        | En liña e con referencia          |
| Imaxes            | Si        | Texto alternativo e título        |
| Táboas            | Si        | Aliñación e cabeceiras            |
| Código            | Si        | En liña e con bloque cercado      |
| Citas             | Si        | Soporte aniñado                   |
| Listas            | Si        | Ordenadas e desordenadas          |
| Listas de tarefas | Si        | Caixas de verificación            |
| Notas ao pé       | Si        | Referencias e listado             |
| Matemáticas       | Quizais   | Depende do soporte do sitio       |

| Centrado | Dereita | Esquerda |
| :------: | ------: | :------- |
|    A     |       1 | alfa     |
|    B     |       2 | beta     |
|    C     |       3 | gamma    |

---

## Listas

-     Lista desordenada

  - Elemento aniñado nivel 2
    - Elemento aniñado nivel 3
  - Volver a nivel 2
-     Outro elemento de nivel superior

1. Elemento de lista ordenada un
   1. Elemento ordenado aniñado 1.1
      1. Elemento ordenado aniñado 1.1.1
   2. Elemento ordenado aniñado 1.2
2. Elemento de lista ordenada dous

-     Lista mixta

  1. Número dentro de viñetas
  2. Outro máis
-     Continuar viñetas

---

## Listas de tarefas

-     [x] Tarefa completada
-     [ ] Tarefa incompleta

  - [x] Subtarefa feita
  - [ ] Subtarefa pendente
-     [ ] Elemento final

---

## Citas

> Esta é unha cita simple para probar o renderizado.
>
> - Pode conter listas
> - E outros elementos en liña como `code` e texto en **negriña**
>
> Cita aniñada:
>
> > Cita de nivel 2
> >
> > > Cita de nivel 3

---

## Código

-     En liña: `let x = 42;`

-     Bloques de código cercados:

  ```javascript
  // Exemplo en JavaScript
  function greet(name) {
  	console.log(`Hello, ${name}!`)
  }
  greet('World')
  ```

  ```python
  # Exemplo en Python
  from math import sqrt

  def hypotenuse(a, b):
      return sqrt(a*a + b*b)

  print(hypotenuse(3, 4))
  ```

  ```bash
  # Exemplo en Bash
  set -euo pipefail
  echo "Testing Markdown"
  mkdir -p build && cd build
  ```

-     Bloque de código con sangría (4 espazos):

        if (true) {
            return "Indented code block";
        }

---

## Regras horizontais

---

---

---

---

## Notas ao pé

Aquí hai unha afirmación cunha referencia de nota ao pé.[^1] E outra aquí.[^nota]

[^1]: Esta é a primeira nota ao pé. Pode conter varias oracións e mesmo ligazóns como [Exemplo](https://example.com).

[^nota]: Segunda nota ao pé con detalles adicionais.

---

## Lista de definicións

Termo
: Definición do termo cunha breve explicación.

Termo máis longo
: Unha definición máis detallada
: Con múltiples liñas de definición.

---

## Caracteres especiais e escapes

-     Tubos en táboas: usa \| dentro de celas.
-     Comiñas invertidas en código: `` Usa `así` ou tres comiñas invertidas para bloques ``.
-     Corchetes: \[escapado\] \(escapado\) \{escapado\}
-     Raias: — (em dash) e – (en dash) en texto plano
-     Comiñas: "dobres", 'simples'

---

## Matemáticas (LaTeX)

-     Matemáticas en liña: \(E = mc^2\), \(a^2 + b^2 = c^2\), \(\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}\)

-     Matemáticas en bloque:

\[
y = x^2 + 3x + c
\]

\[
\int\_{0}^{\infty} e^{-x^2} \, dx = \frac{\sqrt{\pi}}{2}
\]

\[
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}
\end{aligned}
\]

---

## Paso de HTML (se se permite)

Nota: Algúns motores de Markdown saneán HTML. Esta sección proba se se permite HTML en bruto.

<div style="padding:8px;border:1px solid #ccc;">
    <strong>Bloque HTML en bruto:</strong> Este é un div con estilo con <em>énfase</em> e <code>código en liña</code>.
</div>

---

## Axuste de texto longo

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, nisl non rutrum iaculis, lorem elit vulputate lorem, at egestas purus libero nec mauris. Cras dictum, risus vitae feugiat rhoncus, augue orci imperdiet nunc, non sollicitudin arcu orci quis arcu. Mauris congue, urna in viverra ultricies, justo ex commodo neque, et rhoncus massa urna id turpis.

---

## Casos límite

-     Espazos finais ao final da liña para activar saltos de liña.
-     Múltiples liñas en branco abaixo:

-     Liñas que comezan con números que non son listas:

  1984 é unha novela.
  2025-10-20 é unha data.

-     Proba de escapes con barra invertida: \* \_ \` \# \! \> \<

---

## Táboa de contido mixto

| Elemento    | Descrición                  | Exemplo                                            |
| :---------- | :-------------------------- | :------------------------------------------------- |
| Texto       | Énfase e ligazóns           | **Negriña** e [ligazón](https://example.org)       |
| Código      | En liña e bloque            | `sum(a,b)` e ver bloque debaixo                    |
| Matemáticas | En liña e en bloque         | \(x^2\) e \[\sum\_{i=1}^{n} i = \frac{n(n+1)}{2}\] |
| Imaxe       | Verificación de renderizado | ![Tiny](https://placehold.co/40?text=Tiny)         |

---

## Proba de rendemento/desbordamento

Unha cadea moi longa sen cortes:
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

Un URL longo para probar o axuste:
https://example.com/this/is/a/very/long/url/that/might/not/wrap/well/in/some/renderers/and/should/be-tested-for-overflow-or-horizontal-scrolling

---

## Lista de verificación final

-     Cabeceiras H1–H6 represéntanse correctamente
-     Respéitanse parágrafos e saltos de liña
-     Os estilos de énfase funcionan
-     As ligazóns e imaxes cargan
-     As táboas represéntanse con aliñación
-     As listas e listas aniñadas aparecen coa sangría axeitada
-     As listas de tarefas amosan caixas
-     As citas e citas aniñadas represéntanse
-     Cercas de código con realzado por linguaxe
-     As regras horizontais aparecen como separadores
-     As notas ao pé funcionan con referencias
-     As listas de definicións represéntanse se son compatibles
-     As matemáticas represéntanse en liña e en bloque se son compatibles
-     O HTML en bruto xestiónase segundo a política
-     Os caracteres especiais e escapes móstranse correctamente

Fin do ficheiro de proba de Markdown.
