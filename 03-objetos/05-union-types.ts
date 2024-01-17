(() => {
    // en js no existe nada de tipo objeto, por lo que al imprimir con console.log un objeto creado con el tipado de este type Hero, este imprimirá "object"

    type Hero = {
        name: string;
        edad?: number;
        raa: number[];
        getName?: () => string;
    };

    // ! esto es un union types
    let prueba: number | string | Hero = "Sebastian Grandes";

    console.log(prueba);
    console.log(typeof prueba);

    prueba = 56;
    console.log(prueba);
    console.log(typeof prueba);

    prueba = {
        name: "Andrea",
        edad: 56,
        raa: [1, 2, 3],
    };
    console.log(prueba);
    console.log(typeof prueba); // ! de tipo objeto
})();
