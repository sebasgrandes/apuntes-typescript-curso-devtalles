(() => {
    // el ES6 siempre deberia ser nuestro objetivo

    // ya no debes trabajar con var... a menos que necesites una compatibilidad extrema en navegadores anteriores
    // si usas var en TS genera cosas extrañas
    // ! recuerda esto: si estamos trabajando con TS... var ya no existe para mi

    // se recomienda siempre trabajar con constantes... a menos que sepas que esto cambiara // sobre todo para hacer que estas no puedan ser modificadas posteriormente

    const hola: string = "Hola como estas?";
    console.log(hola);
    // también se recomienda trabajar con asignacion de una funcion (o sea funciones creadas como function expresion), aquellas las cuales son asignadas a una constante... puedes crearlas con funciones flecha (mas moderno) o como funciones tradicionales (las declaradas)...y esto porque estas no pueden ser reasignadas o modificadas (hablando del ES6 por supuesto, porque en el ES5 esta prohibicion de la reasignacion se pasa por algo, pero esto es antiguo y no se recomienda usarlo)...
    // hablando del ES6 ya no pueden ser reasignadas cuando se declaran las funciones tradicionales normales (pero en el ES5 si se puede, lo cual esta mal)

    const getName = (): void => {
        console.log("viejo getName");
    };

    getName();

    // ... mientras que las tradicionales (function declaration) que no asignas a una constante sí se podrian reasignar (hablando del Es5 por supuesto... en el ES6 ya no se puede)
    // function getName2() {
    //     console.log("asd");
    // }
    // getName2 = () => {
    //     console.log("nuevo getName2");
    // };
    // getName2(); // nuevo getname2
})();
