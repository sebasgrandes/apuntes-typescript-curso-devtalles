import { genericFunction, genericFunctionArrow } from "./generics/generics";

const name: string = "Fernando";

// el autocompletado funciona bastante bien
console.log(genericFunction(3.1415).toFixed(2));
console.log(genericFunctionArrow(name).toUpperCase());
console.log(genericFunctionArrow(new Date()).getDate());
