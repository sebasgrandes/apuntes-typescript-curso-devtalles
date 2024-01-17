(() => {
    // el tipo de argumento para los argumentos es necesario
    // ! no es recomendable ponerle varios tipos de datos a los argumentos

    function funzion(nombre1: string, nombre2: string): string {
        return `${nombre1} ${nombre2}`;
    }

    // si mandas a llamar tu funcion entonces obligatoriamente necesitarás usar los argumentos con sus respectivos tipos de datos establecidos
    const nombreCompleto = funzion("Tony", "Stark");
    console.log({ nombreCompleto });

    // recuerda que typescript no es infalible a errores
    let noName: any;
    const nombreCompleto2 = funzion(noName, "Stark");
    // let noName: string;
    console.log({ nombreCompleto2 });
})();
