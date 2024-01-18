(() => {
    // - podemos usar el constructor privado para controlar la manera en que sus instancias son ejecutadas.
    // ej: manejar singletons (una unica instancia a traves de mi aplicacon)

    class Apocalipsis {
        static instance: Apocalipsis;

        // 1. ahora podemos controlar la manera en como es es llamado... o sea ahora este constructor puede ser llamado desde la misma clase, y ya no desde afuera, por ello marca error al crear instancias... pero para que sirve?...
        private constructor(public name: string) {}

        // este metodo me regresa una instancia de apocalipsis
        static callApocalipsis(): Apocalipsis {
            // solo creo esta instancia si apocalipsis instance esta como undefined o null
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis(
                    "Soy apocalipsis el unico"
                );
            }
            // * patron singleton
            // esto es el principio singleton basicamente: hace que cada que quiera usar mi clase siempre va a ser la misma instancia que se creo o genero la primera vez
            return Apocalipsis.instance;
        }

        changeName(newName: string): void {
            this.name = newName;
        }
    }

    // ! todas seran la misma instancia
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName(
        "Xavier"
    ); /* aun cuando lo cambies... todos apuntan a la misma instancia */

    // const apocalipsis1 = new Apocalipsis("Soy apocalipsis... el único");
    // const apocalipsis2 = new Apocalipsis("Soy apocalipsis2... el único2");
    // const apocalipsis3 = new Apocalipsis("Soy apocalipsis3... el único3");

    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
