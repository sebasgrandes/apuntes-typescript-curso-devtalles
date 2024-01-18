(() => {
    // ! en la mayoria de los casos es mejor usar void

    // ! Usar undefined podría sugerir que la función podría devolver un valor, el cual es undefined. Esto es diferente de void, que claramente indica que nunca hay un valor de retorno.
    // ! si usas undefined, TypeScript no te impedirá que la función devuelva un valor, mientras que con void, TypeScript generará un error si intentas devolver algo de la función.

    // en teoria true, false, null y undefined son aplicables como un boolean

    // en el modo ESTRICTO (strictNullChecks): el null y undefined NO SON valores permitidos a un string, boolean u otro tipo de dato... mientras que en el modo no estricto si

    // en teoria esto es correcto, pero no se recomienda usar void en este caso. solo en funciones que no retornan algo
    // let prueba: void = undefined;
    // console.log(prueba);

    let nada: undefined = undefined;
    console.log(nada);

    // let numero: number = null; // ! no permitido
    // console.log(numero);

    // si en ultimo caso tu variable podria tomar undefined podrias hacer esto... o desactivar el modo estricto
    let string: string | undefined = undefined;
    console.log(string);
})();
