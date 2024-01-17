// import { Herox } from "./interfaces/hero";
// import { Villain } from "./interfaces/villain";

// ! truco para importar en una sola linea...
import { Herox, Villain } from "../interfaces";

import { genericFunctionArrow } from "../generics/generics";

const deadpool = {
    name: "Deadpool",
    realName: "Wade Winston Wilson",
    dangerLevel: 130,
};

// ! aqui en reemplazo de la "T" le digo de que tipo deberia ser
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
console.log(genericFunctionArrow<Herox>(deadpool).realName);
