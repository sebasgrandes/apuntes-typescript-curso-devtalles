(() => {
    (() => {
        // el interface es similar al type, nos ayuda a restringir como deben ser los tipos de nuestros objetos

        // la unica diferencia es que las interfaces sí se pueden expandir, o sea extender, añadir más cosas, etc. pero la interface no define el comportamiento como una clase... o sea que para las interfaces no les importa mucho si estan implementados o no (en las clases si importan). pero si asegura que tengan esos metodos o esos nombres en especifico
        // las interfaces se usan mas para definir peticiones http

        // si quieres sabe mas lee la doc de ts: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

        // aqui basicamente copie el mismo codigo que la clase de type, modificando "type" por "interface"

        interface Hero {
            name: string;
            edad?: number;
            raa: number[];
            getName?: () => string;
        }

        let flash: Hero = {
            name: "Barry Allen",
            edad: 24,
            raa: [1, 2, 3],
        };

        let superman: Hero = {
            name: "Klark Kent",
            edad: 25,
            raa: [9, 8, 7],
            getName() {
                return this.name;
            },
        };

        console.log(flash);
        console.log(flash.getName?.());
        console.log(superman);
        console.log(superman.getName?.());
    })();
})();
