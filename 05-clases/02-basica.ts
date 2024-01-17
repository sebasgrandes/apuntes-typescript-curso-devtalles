(() => {
    // forma corta de crear las clases
    class Avenger {
        // ! ya no declararia los atributos, estos se declaran en los mismo parametros del constructor... excepto la propiedad estatica
        // - En TypeScript, puedes declarar e inicializar las propiedades de la clase directamente en el constructor utilizando los modificadores de acceso (public, private, protected).

        static avgAge: number = 34;

        constructor(
            private name: string,
            private team: string,
            public realName?: string
        ) {
            // ! esto también puedo omitirlo
            // en la transpilacion a js ya se coloca automaticamente
        }
    }

    const sebas: Avenger = new Avenger(
        "Sebastian Grandes",
        "Avengers",
        "Scott Lang"
    );
    console.log(sebas);
})();
