(() => {
    // todo - si puensas usar objetos mas de una vez, con los mismo tipos de datos, esta genial que crees un "type"... o un interface (visto mas adelante)

    // ! RECUERDA MUY BIEN QUE EL ORDEN DEL TIPADO NO AFECTA LOS OBJETOS, ES DECIR SI CREAS UN TIPADO name, edad, raa... en tu objeto puedes crearlo como edad, raa, name. Y VICEVERSA!!! (o sea tiparlo al reves o en desorden no afecta)

    // los tipos no son traducidos a javascript... "los tipos sólo existen en TypeScript para brindarnos control sobre los objetos", pero no se transpilan

    // type es una palabra reservada que nos crea una especie de tipo que podemos usar para definir los tipos de nuestros objetos
    // se crean para poner reglas a los objetos o variables que definimos. funciona como si fuera un tipo comun y corriente

    // ! aqui creo un type que sea reutilizable para ambas variables
    type Hero = {
        name: string;
        edad?: number;
        raa: number[];
        getName?: () => string;
    };

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
