(() => {
    // cuando en tu tipo de dato tendrás más de 1 nivel, NO SE RECOMIENDA ANIDARLO (dentro del mismo)... se recomienda extenderlo, creando otro interface, del padre al hijo
    interface User {
        name: string;
        age?: number;
        adress: Adress;
        getFullName(zip: number): void;
    }
    // * las interfaces también pueden tener metodos
    // ! TAMBIÉN ES POSIBLE HEREDAR INTERFACES CON LA PALABRA EXTENDS

    interface Adress {
        zip: number;
        adress: string;
        country: string;
    }

    // las interfaces no se transpilan a js porque en js no existe esto

    const sebas: User = {
        name: "Sebastian Grandes",
        age: 23,
        adress: {
            zip: 12,
            adress: "Calle Elias Aguirre",
            country: "Perú",
        },
        getFullName(zip: number) {
            return this.adress.country;
        },
    };
    console.log(sebas);
    console.log(sebas.getFullName(12));
})();
