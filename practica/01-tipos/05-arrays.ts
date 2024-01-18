(() => {
    // en los arreglos, TS también puede inferir el tipos de datos que contienen los arrays por aquellos que estan colocados dentro

    // infiriendo
    // const arreglo1 = ["aaaa", 13231, "bbb"];
    // * declarando: es dificil que declares un arreglo con diferentes tipos
    const arreglo2: (number | string | boolean)[] = ["aaaa", 13231, "bbb"];

    // arreglo1.push(true);
    arreglo2.push(true);
    console.log(arreglo2);

    const arreglo3: number[] = [
        1.65478415, 2.65478415, 3.65478415, 4.65478415, 5.65478415,
    ];
    // en los metodos (y los argumentos de estos) de los arreglos también se infieren los tipos de datos
    // numeritox es de tipo number
    // foreach acepta numeros no mas
    // el autocompletado de numeros funciona correctamente
    arreglo3.forEach((numeritox) => {
        console.log(numeritox.toFixed(2));
    });

    const arreglo4: string[] = ["sebas", "andrea", "asdasd"];
    // error en tofixed porque el numeritox es string
    // arreglo4.forEach((numeritox) => {
    //     console.log(numeritox.toFixed(2));
    // });
})();
