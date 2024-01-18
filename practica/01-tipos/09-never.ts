(() => {
    // ! never no es void ni undefined
    // ! never indica que mi funcion no debe ser exitosa ("no debe tener un punto de retorno") o que usualmente puede terminar en un error.

    // ! no significa que mi funcion deba terminar en un "return" porque esto ya sería un undefined

    const fun = (msg: string): never => {
        // ! esto solito tampoco se permite porque al final del if implicitamente estas retornando un undefined
        // if (msg) {
        //     throw new Error(msg);
        // }

        // * esto si esta permitido... es un error
        throw new Error(msg);

        // return; // ! esto no se permite porque estas retornando undefined... no un error o no exito
    };

    // esto también es valido
    const fun2 = (msg: string): never | number => {
        return 1;
    };

    console.log(fun2("wooo"));
    fun("Error critico jeje");
})();
