(() => {
    // ! el "?" indica que el argumento es opcional (puede venir o no... existir o no)
    function funzion(nombre1: string, nombre2?: string): string {
        // usamos el || para manejar el caso de que nombre2 sea undefined o falsy (cadena vacia)
        return `${nombre1} ${nombre2 || "----"}`;
    }

    const nombreCompleto = funzion("Tony");
    console.log({ nombreCompleto });
})();
