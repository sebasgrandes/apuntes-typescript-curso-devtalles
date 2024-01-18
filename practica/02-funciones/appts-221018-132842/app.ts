// Funciones Básicas
function sumar(a: number, b: number): number {
    return a + b;
}

const contar = (heroes: string[]): number => {
    return heroes.length;
};
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

// ! recuerda que los parametros por defecto son diferentes a los parametros opcionales

// ! Parametros por defecto
const llamarBatman = (llamar: boolean = true): void => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};

llamarBatman();

// Rest?
const unirheroes = (...personas: string[]): string => {
    // ! si quieres puedes ayudarte sombreando el .join para saber que es lo que retornaria este metodo y asi puedas colocarlo en tu funcion
    return personas.join(", ");
};

// Tipo funcion
// ese ultimo arreglo es de tipo never por inferencia
const noHaceNada = (
    numero: number,
    texto: string,
    booleano: boolean,
    arreglo: []
): void => {};

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
// como no regresa nada le pongo void
let noHaceNadaTampoco: (a: number, b: string, c: boolean, d: []) => void;
noHaceNadaTampoco = noHaceNada;
