(() => {
    // private significa que solo tendre acceso a esa propiedad dentro de esa clase
    // si no le colocamos private, por defecto es publica... sin embargo, es importante y buena practica que lo coloquemos expresamente como public

    // console.log(antaman.) // no veo ni private ni static
    class Avenger {
        // - es comun declarar los atributos de una clase fuera del constructor...
        // private y public son modificadores de acceso

        // private: name solo es accesible dentro de la clase Avenger... significa que no se puede acceder o modificar directamente desde instancias de esta clase o desde clases derivadas
        private name: string;
        private team: string;
        // public: realName es accesible desde cualquier parte del codigo donde se tenga una instancia de "Avenger"
        // el ? indica que es un atributo opcional
        public realName?: string;
        // static: avgAge es un atributo estatico, perteneciente a la clase Avenger en sí, y no a una instancia específica. Esto significa que se puede acceder a avgAge sin necesidad de crear un objeto de la clase Avenger.
        static avgAge: number = 35;

        constructor(name: string, team: string, realName?: string) {
            // el this es para acceder a la clase
            // quí es donde se asignan los valores pasados al constructor (name) a los atributos de la clase (this.name).
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    const av1 = new Avenger("Ironman", "Avengers");
    console.log(av1);
    console.log(Avenger.avgAge);
})();
