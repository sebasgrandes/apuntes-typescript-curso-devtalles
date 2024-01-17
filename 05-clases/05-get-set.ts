(() => {
    // getter y setter visualmente desde afuera parecen propiedades comunes y corrientes. Pero internamente, parecen como metodos
    class Avenger {
        constructor(public name: string, public realName: string) {
            console.log("Constructor Avenger llamado!");
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(name: string, realName: string, public isMutant: boolean) {
            super(name, realName);

            console.log("Constructor xmen llamado");
        }

        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }

        // get NO recibe argumentos y retorna algo

        get fullName(): string {
            return `${this.name} - ${this.realName}`;
        }

        // set recibe un solo argumento y no retorna nada

        public set fullName(name: string) {
            if (name.length < 3) {
                throw new Error("El nombre debe ser mayor a 3 letras");
            }
            this.name = name;
        }
    }

    const wolverine = new Xmen("Wolverine", "logan", true);
    // wolverine.fullName = "Fe";
    // wolverine.getFullNameDesdeXmen();
    // console.log(wolverine);
})();
