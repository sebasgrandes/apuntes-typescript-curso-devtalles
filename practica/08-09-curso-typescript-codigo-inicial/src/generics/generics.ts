// una funcion generica es una funcion que puede recibir cualquier tipo de argumento

export const printObject = (argument: any) => {
    console.log(argument);
};

// usando un generic puedo definir que tipo retornara en base a mi parametro de entrada.
// ! en este caso le digo que mi funcion es de tipo generico (<T>)... la cual toma un argumento de tipo "T" y retorna un tipo "T"
// la salida también puede ser de tipo string por ejemplo
export function genericFunction<T>(argument: T): T {
    return argument;
}
// el ultimo T de retorno lo puedes omitir (y por defecto sera de tipo T)
export const genericFunctionArrow = <T>(argument: T) => argument;
