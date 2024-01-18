# que es un getter y setter y cual es su utilidad

Los _getters_ y _setters_ son métodos especiales dentro de una clase en lenguajes de programación orientada a objetos como TypeScript y JavaScript. Su propósito es controlar el acceso a los valores de las propiedades de una clase. Veamos cada uno en detalle:

### Getter

Un _getter_ es un método que se utiliza para leer el valor de una propiedad. En lugar de acceder directamente a la propiedad, se llama a un método que devuelve el valor de esa propiedad. Esto permite añadir lógica adicional durante la obtención del valor, como la validación, el formato o el cálculo basado en otros valores de propiedad. Por ejemplo:

```typescript
class Persona {
    private _edad: number;

    constructor(edad: number) {
        this._edad = edad;
    }

    get edad() {
        // Aquí se puede añadir lógica adicional si es necesario
        return this._edad;
    }
}
```

En este ejemplo, `edad` es un _getter_ que permite a los usuarios de la clase `Persona` obtener el valor de la propiedad `_edad`.

### Setter

Un _setter_ es un método que se utiliza para asignar un valor a una propiedad. En lugar de asignar el valor directamente, se llama a un método que se encarga de la operación. Esto es útil para realizar validación o transformación del valor antes de que sea almacenado. Por ejemplo:

```typescript
class Persona {
    private _edad: number;

    constructor(edad: number) {
        this._edad = edad;
    }

    set edad(nuevaEdad: number) {
        if (nuevaEdad < 0) {
            throw new Error("La edad no puede ser negativa");
        }
        this._edad = nuevaEdad;
    }
}
```

En este ejemplo, el _setter_ `edad` permite asignar un nuevo valor a la propiedad `_edad`, pero antes verifica que el valor no sea negativo.

### Utilidad de los Getters y Setters

1. **Encapsulación:** Permiten controlar cómo se accede y se modifica una propiedad. La lógica interna de la clase permanece oculta para los usuarios de la clase.
2. **Validación:** Pueden incluir lógica de validación para asegurar que los datos sean correctos antes de asignarlos a una propiedad.
3. **Flexibilidad:** Facilitan la implementación de lógica adicional cuando se accede o se modifica una propiedad, como cálculos automáticos o cambios de formato.
4. **Compatibilidad hacia adelante:** Si en el futuro necesitas cambiar la lógica interna relacionada con una propiedad, puedes hacerlo sin alterar la interfaz pública de la clase.

En resumen, los _getters_ y _setters_ son herramientas fundamentales en la programación orientada a objetos para mantener un control riguroso sobre cómo se accede y modifica el estado interno de un objeto, proporcionando una mayor seguridad, integridad y flexibilidad en el manejo de datos.
