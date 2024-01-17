(() => {
    // ! recuerda que any también infiere un tipo de dato array por ejemplo ... -> let hola : any = [1,2,3,]

    // ! trata de nunca usar este tipo de dato

    // cuando defines con este tipo, el autocompletado se vuelve inutil, no te autocompleta para strings ni number...

    // * casting: tratalo como un tipo de dato pero realmente no le estoy cambiando el tipo de dato "any"

    let dato: any;
    // let dato: number = 1234856;
    let existe;
    let power;

    dato = "Sebastian Grandes";

    // charAt es lo mismo que dato[5]: el metodo con el any no se autocompleta pero cuando pones el casting si
    // console.log(dato.charAt(5));

    console.log((dato as string).charAt(5));

    dato = 6.548545;
    console.log(<number>dato.toFixed(2));

    // ambos: tanto "as string" como <number> son formas de hacer casting

    console.log(existe);
    console.log(power);
})();
