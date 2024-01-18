(() => {
    // Tipos
    const batman: string = "Bruce";
    const superman: string = "Clark";

    const existe: boolean = false;

    // ! Tuplas
    const parejaHeroes: [string, string] = [batman, superman];
    const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

    // ! Arreglos
    const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

    // ! Enumeraciones
    enum poderes {
        acuaman = 0,
        batman = 1,
        superman = 100,
        flash = 5,
    }
    console.log(poderes);

    // ! recuerda definirles el tipo... en este caso es de tipo "poderes"
    const fuerzaFlash: poderes = poderes.flash;
    const fuerzaSuperman: poderes = poderes.superman;
    const fuerzaBatman: poderes = poderes.batman;
    const fuerzaAcuaman: poderes = poderes.acuaman;

    // Retorno de funciones
    function activar_batiseñal(): string {
        return "activada";
    }

    function pedir_ayuda(): void {
        console.log("Auxilio!!!");
    }

    // ! Aserciones de Tipo
    // lo podrias dejar asi no mas pero es recomendable recuerda siempre ser especifico...
    const poder: any = "100";
    const largoDelPoder: number = (poder as string).length; /* casting */
    console.log(largoDelPoder);
})();
