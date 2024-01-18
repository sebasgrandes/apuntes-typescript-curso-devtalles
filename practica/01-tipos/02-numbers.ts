(() => {
    let avengers: number = 10;
    const villians: number = 20;

    if (avengers < villians) {
        console.log("Estamos en problemas");
    } else {
        console.log("Estamos salvados");
    }

    // no todo lo que hacemos en TS está necesariamente bien
    avengers =
        Number(
            "55ABC"
        ); /* retorna NaN, pero este igual es considerado como un numero */
    console.log({ avengers });
})();
