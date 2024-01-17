function printToConsole(constructor: Function) {
    console.log(constructor);
}
// * un decorador no es mas que una funcion que se ejecuta en el momento de transpilacion o compilacion del codigo

const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) {
        return printToConsole;
    } else {
        return () => {};
    }
};

// un factory es una funcion que retornar otra funcion... si es usada como decorador debes llamarlo con el "()"

// este decorador prohibe que alguien haga una expancion en una clase
const bloquearPrototipo = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error(
                    "El id del pokemon debe esta entre 1 y 800"
                );
            } else {
                return originalMethod(id);
            }
        };
        // console.log({ target, propertyKey, descriptor });
    };
}

function readOnly(isWritable: boolean = true) {
    return function (target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                // console.log(this, "getter");
                console.log(this);
                return "Fernando";
            },
            set(this, val) {
                console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false,
                });
            },
        };
        return descriptor;
    };
}

@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {
    public publicApi: string = "https://pokeapi.co";
    constructor(public name: string) {}

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon guardado a la base de datos ${id}`);
    }
}
