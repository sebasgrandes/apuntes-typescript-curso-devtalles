(() => {
    // si le colocas any en la creacion del array, este al ser desestructurado... lo desestructurado también cogeran este any...
    // ! por lo que es importante definir bien el tipo de dato de tu array

    const vengadores: string[] = [
        "Robert Downey Jr.",
        "Scarlet Johanson",
        "Paul Bettany",
    ];

    // sombrea el tipo de dato de ironman... este es el mismo que el que definiste en tu arreglo
    const [ironman, viudanegra, vision] = vengadores;

    console.log({ ironman, viudanegra });
})();
