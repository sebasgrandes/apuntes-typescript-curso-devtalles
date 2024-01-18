# explicame que es protected y el super

En tu código, estás utilizando conceptos importantes de la programación orientada a objetos en TypeScript, como son `protected`, `super`, y la herencia a través de `extends`. Vamos a analizar cada uno de estos elementos para entender su funcionamiento y propósito.

### `protected`

El modificador `protected` es utilizado en la definición de propiedades y métodos de una clase. Este modificador asegura que las propiedades o métodos marcados como `protected` sólo puedan ser accesibles dentro de la clase en la que se declaran y en las clases que hereden de esta.

En tu ejemplo, el método `getFullName` está marcado como `protected` en la clase `Avenger`. Esto significa que puedes llamar a `getFullName` desde dentro de la clase `Avenger` y también desde cualquier clase que extienda a `Avenger`, como `Xmen`.

### `super`

El `super` en TypeScript y otros lenguajes de programación orientada a objetos, es una referencia al constructor de la clase padre (o a sus métodos, dependiendo del contexto). Se utiliza principalmente en dos situaciones:

1. **En Constructores:** En una clase derivada (subclase), debes llamar al constructor de la clase padre si esta tiene un constructor. Esto se hace usando `super`, pasando los argumentos necesarios. En tu ejemplo, la clase `Xmen` extiende la clase `Avenger`. Dentro del constructor de `Xmen`, llamas a `super(name, realName)` para ejecutar el constructor de la clase `Avenger`.

2. **Para Acceder a Métodos de la Clase Padre:** También puedes usar `super` para acceder a métodos de la clase padre que han sido sobrescritos o que quieres utilizar desde la clase hija. En tu código, `super.getFullName()` se utiliza para acceder al método `getFullName` de la clase `Avenger` desde `Xmen`.

### `extends`

`extends` se utiliza para crear una clase que es una extensión de otra clase. La clase hija hereda propiedades y métodos de la clase padre. En tu código, `Xmen` es una extensión de `Avenger`, lo que significa que `Xmen` hereda las propiedades y métodos de `Avenger`.

### En Resumen

-   **`protected`**: Limita el acceso a propiedades y métodos a la clase en la que están definidos y a sus subclases.
-   **`super`**: Se utiliza para llamar al constructor de la clase padre en una subclase o para acceder a sus métodos y propiedades.
-   **`extends`**: Crea una relación de herencia entre dos clases, permitiendo que la clase hija tenga acceso a propiedades y métodos de la clase padre.

Este enfoque es fundamental en la programación orientada a objetos y permite una estructura de código más organizada y reusable.
