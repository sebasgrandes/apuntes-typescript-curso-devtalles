(() => {
    // el for of es una version más simplificada y corta el el for tradicional, pero cuya funcion es la misma

    type Avenger = {
        name: string;
        power: number;
    };

    const ironman: Avenger = {
        name: "Robert",
        power: 185,
    };
    const thanos: Avenger = {
        name: "Thanos no se que",
        power: 500,
    };
    const vision: Avenger = {
        name: "Paul",
        power: 600,
    };

    const avengers: Avenger[] = [ironman, thanos, vision];

    // si sombreas "aven", te saldra que es de tipo Avenger
    // itera en cada elemento de mi arreglo
    for (const aven of avengers) {
        // el autocompletado es genial en este caso con el aven. // y esto sucede gracias a que definimos el tipo de dato... en este caso con el type Avenger
        console.log(aven.name, aven.power);
    }
})();
