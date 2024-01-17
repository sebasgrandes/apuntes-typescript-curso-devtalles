import { Pokemon } from "./decoratos/pokemon-class";

const charmander = new Pokemon("Charmander");

// (Pokemon.prototype as any).customName = "Pikachu"; /* dira que no se puede expandir */

// console.log(charmander);
charmander.savePokemonToDB(50);
