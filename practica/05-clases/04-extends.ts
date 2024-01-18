(() => {
    class Avenger {
        constructor(private name: string, public realName: string) {
            console.log("Constructor Avenger llamado!");
        }

        // private vs protected: con protected podemos acceder a metodos y propiedades dentro de clases que se extiendan de nuestra clase.
        // * protected: Este modificador asegura que las propiedades o métodos marcados como protected sólo puedan ser accesibles dentro de la clase en la que se declaran y en las clases que hereden de esta.
        // Esto significa que puedes llamar a getFullName desde dentro de la clase Avenger y también desde cualquier clase que extienda a Avenger, como Xmen.

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    // extends hace que la clase tenga a disposicion todo lo de la tomada así como también sus restricciones
    // * extends: extends se utiliza para crear una clase que es una extensión de otra clase. La clase hija hereda propiedades y métodos de la clase padre. En tu código, Xmen es una extensión de Avenger, lo que significa que Xmen hereda las propiedades y métodos de Avenger.

    class Xmen extends Avenger {
        constructor(name: string, realName: string, public isMutant: boolean) {
            // constructores de clases derivadas necesitan un super
            // el super hace referencia al constructor de la clase de la que se extiende... es obligatorio cuando en mi clase que se extiende también lo es.
            // * super: es una referencia al constructor de la clase padre (o a sus métodos, dependiendo del contexto). se usa en: 1. constructores 2. para acceder a metodos de la clase padre
            // hago referencia al constructor padre
            super(name, realName);

            console.log("Constructor xmen llamado");
        }

        getFullNameDesdeXmen() {
            // hago referencia al metodo del constructor/clase padre
            console.log(super.getFullName());
        }
    }

    // ! para wolverine y nuevoAvenger no tengo disponible getFullName de la clase avenger porque es protected... lee arriba

    const nuevoAvenger = new Avenger("Capitan America", "Steve Rogers");
    console.log(nuevoAvenger);
    // nuevoAvenger.

    const wolverine = new Xmen("Wolverine", "logan", true);
    wolverine.getFullNameDesdeXmen();
    console.log(wolverine);
})();
