(() => {
    // ! para tener el contenido de tu type basta sombrear en tu objeto creado y copiar sus tipos, para luego pegarlo en el type
    type Avenger = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    };

    const avengers: Avenger = {
        nick: "Samuel Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.547,
    };

    // ! en la destruc de objetos... estos son buscados exactamente como se definieron
    const fun = ({ vision, ...restantejx }: Avenger) => {
        // el autocompletado de "restantejx" funciona de maravilla
        console.log(vision, restantejx, restantejx.ironman);
        // si estuvieramos en js seria facil equivocarte y hacer restantejx.vision... esto no sucede en ts, marca un error
    };

    fun(avengers);
})();
