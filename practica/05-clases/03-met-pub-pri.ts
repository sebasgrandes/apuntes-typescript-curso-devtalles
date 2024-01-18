(() => {
    // forma corta de crear las clases
    class Avenger {
        static avgAge: number = 34;
        static getName(): string {
            // aqui el this.name hace referencia al nombre de la clase, por ser static
            return this.name;
        }
        constructor(
            private name: string,
            private team: string,
            public realName?: string
        ) {
            // ! esto también puedo omitirlo
            // en la transpilacion a js ya se coloca automaticamente
        }

        public bio() {
            return `${this.name} (${this.team}) - ${this.realName}`;
        }
    }

    const sebas: Avenger = new Avenger(
        "Sebastian Grandes",
        "Avengers",
        "Scott Lang"
    );
    console.log(sebas);
    console.log(sebas.bio());
    console.log(Avenger.getName());
})();
