(() => {
    // las clases abstractas no sirven para crear instancias
    // ! las clases abstractas sirven para que otras clases sean extendidas de ella o para por ejemplo hacer que en una funcion, se espere un argumento cuyo tipo sea de dicha clase abstracta (es decir, instancias (o elementos con caracteristicas) creadas de clases que se extendieron de la clase abstracta)
    abstract class Mutante {
        constructor(public name: string, public realName: string) {}
    }

    // ! utilidad de la clase abstracta: que otras clases sean extendidas de ella
    class Xmen extends Mutante {
        salvarMundo() {
            return "Mundo a salvo";
        }
    }
    class Villin extends Mutante {
        destruirMundo() {
            return "Destruir mundo";
        }
    }

    const wolverine = new Xmen("wolverine", "logan");
    const magneto = new Villin("magneto", "magnus");

    console.log(wolverine.salvarMundo());
    console.log(magneto.destruirMundo());

    // ! otra utilidad de la clase abstracta: asegurarme de que un argumento, puede ser d ecualquier otro tipo, pero siempre y cuando implemente las caracteristicas de su clase abstracta
    const printName = (character: Mutante) => {
        console.log(character.realName);
    };

    printName(wolverine);
    printName(magneto);
})();
