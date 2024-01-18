(() => {
    // uso un type cuando se que la clase no va a crecer o modificarse
    // uso un interface cuando se que la clase podria extenderse o crecer
    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number): string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        mutantPower(id: number) {
            return `${this.name} y ${this.realName}`;
        }
        constructor(
            public name: string,
            public age: number,
            public realName: string
        ) {}
    }

    const wolverine = new Mutant("Wolverine", 35, "Lobezno");
    console.log(wolverine);
    console.log(wolverine.mutantPower(1));
})();
