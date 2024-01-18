(() => {
    // no solo pueden ser tuplas, sino también trio cuarteto sexteto etc etc
    // las tuplas definen cuales seran los tipos de datos de cada uno de los datos de mi arreglo, de forma ordenada
    const tuples: [string, number, boolean] = ["Sebastian Grandes", 158, true];

    // ! no permtido
    // tuples[0] = 12;
    // tuples[1] = "asdasd";
    // tuples[2] = "raaa";

    console.log(tuples);

    // permitido
    tuples[0] = "Amdrea";
    tuples[1] = 1;
    tuples[2] = false;

    console.log(tuples);
})();
