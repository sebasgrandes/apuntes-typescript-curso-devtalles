import powers from "../data/powers";

// podemos exportar clases, variables, objetos, etc.
export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ) {}

    get power(): string {
        // * TypeScript infiere el tipo de power basado en el tipo del array powers. Dado que powers es un array de Power[], TypeScript automáticamente asume que cada elemento power dentro de la función find es del tipo Power. Por lo tanto, no es necesario especificar explícitamente el tipo de power en esta instancia.
        return (
            powers.find((power) => (power.id = this.powerId))?.desc ||
            "not found"
        );
        // en vez del "?" podrias poner el "!" para decirle a TS que confie en tu porque siempre va a encontrar un archivo
    }
}

export class Hero2 {}
export class Hero3 {}
export class Hero4 {}
export class Hero5 {}

export const PI = 3.141516;
export const miNombre = "Fernando";
