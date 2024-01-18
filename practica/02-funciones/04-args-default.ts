(() => {
    // ! un parametro requerido no puede ir despues de un parametro opcional... pero podemos escaparnos esto colocando valores por defecto a los parametros
    function funzion(
        nombre1: string,
        nombre2?: string,
        upper: boolean = false
    ): string {
        // usamos el || para manejar el caso de que nombre2 sea undefined o falsy (cadena vacia)
        // * el "||" identifica si es falsy
        if (upper) {
            // si entra aqui, aqui queda gracias al return
            return `${nombre1} ${nombre2 || "----"}`.toUpperCase();
        }
        return `${nombre1} ${nombre2 || "----"}`;
    }

    const noName = funzion("Tony");
    const nombreKuak = funzion("Tony", "", true);
    // ! estos valores por defecto hacen que estos mismos parametros sean opcionales (fijate el "nombre", sombrea el puntero y aparecerá el "?" del 3er parametro)
    const nombre = funzion("Tony", "Stark");
    const nombreCompleto = funzion("Tony", "Stark", true);
    console.log({ noName });
    console.log({ nombreKuak });
    console.log({ nombre });
    console.log({ nombreCompleto });
})();
