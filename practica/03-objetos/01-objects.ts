(() => {
    // cada propiedad tiene sus propios tipos de datos. sombrea en el objeto y veras

    let objeto = {
        name: "senas",
        edad: 23,
        raa: ["true"],
    };

    // * no se puede
    // objeto = {
    //     name2: "andrea"
    // }

    // * tampoco se puede: es necesario las demas propiedades
    // objeto = {
    //     name: "Andre",
    // };

    objeto = {
        name: "Andrea",
        edad: 22,
        raa: ["false"],
        // * no sin ayudin
        // getName() {
        //     return this.name;
        // },
    };
})();
