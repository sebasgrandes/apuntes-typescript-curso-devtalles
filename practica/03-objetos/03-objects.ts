(() => {
    // ! getName?: ()... QUIERE DECIR que es una funcion (opcional) que NO RECIBE NINGUN PARAMETRO

    let flash: {
        name: string;
        edad?: number;
        raa: string[];
        getName?: () => string;
    } = {
        name: "senas",
        edad: 23,
        raa: ["true"],
    };

    flash = {
        name: "andrea",
        raa: ["false"],
        getName() {
            return this.name;
        },
    };

    console.log(flash);

    // aqui salia un error: Cannot invoke an object which is possibly 'undefined'. // esto es una regla estricta de TS
    // ! es obligatorio el uso del operador optional chain. de esta manera si getName esta definido entonces se ejecuta... de lo contrario da undefined
    console.log(flash.getName?.());
})();
