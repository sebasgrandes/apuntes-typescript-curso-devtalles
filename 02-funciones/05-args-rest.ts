(() => {
    // resto de argumentos... para que una funcion reciba el resto de argumentos que se les pase

    // ! rest args es un arreglo de argumentos, por ello es de tipo string como un arreglo
    // no olvides colocarle el tipo de dato que retorna la funcion
    function unionNombres(nombre1: string, ...restArgs: string[]): string {
        return `${nombre1} ${restArgs.join(" ")}`;
    }

    console.log(unionNombres("Sebastian", "Andre", "Grandes", "Conqui"));
})();
