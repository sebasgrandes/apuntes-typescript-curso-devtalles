(() => {
    // en el tipado tienes que colocarle especificamente la propiedad tal y como esta dentro del objeto
    // también puedes usar los parametros opcionales
    let objeto: { name: string; edad?: number; raa: string[] } = {
        name: "senas",
        edad: 23,
        raa: ["true"],
    };

    objeto = {
        name: "andrea",
        raa: ["false"],
    };

    console.log(objeto);
})();
