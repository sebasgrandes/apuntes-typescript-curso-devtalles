// mi funcion autoinvocada también es inferida por TS
(() => {
    // TS también infiere los tipos de dato que retornan las funciones... así como también aquellas constantes a las que se les pasa lo retornado
    console.log("asdasd");
    const hola: string = "helouuuu";
    function funzion(): string {
        return hola;
    }

    const funzion3 = (): string => {
        return "Sebastian Grandes";
    };

    console.log(funzion());
    console.log(typeof funzion3);
    console.log(funzion3());
})();
