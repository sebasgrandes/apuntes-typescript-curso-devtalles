import * as HeroClasses from "./classes/Hero"; /* asi importo todo lo exportado de mi archivo Hero.ts */
// import { Hero as SuperHero, Hero2 } from "./classes/Hero"; /* a los export normales les puedes poner un alias */
import powers, {
    Power,
} from "./data/powers"; /* puedo importar por defecto y el normal juntos a la vez */

console.log("Hola Mundo!");

const ironman = new HeroClasses.Hero("Sebastian Grandes", 12, 23);
console.log(ironman);
console.log(powers);
