// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
    encender: boolean;
    velocidadMaxima: number;
    acelerar(): void;
}

const conducirBatimovil = (auto: Auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};

const batimovil: Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    },
};

conducirBatimovil(batimovil);
console.log(batimovil);

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Villian {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
}

const guason: Villian = {
    reir: true,
    comer: true,
    llorar: false,
};

const reir = (villano: Villian): void => {
    if (villano.reir) {
        console.log("JAJAJAJA");
    }
};

reir(guason);

// Cree una interfaz para la siguiente funcion

interface Fun {
    (a: string[]): number;
}

// como ya le estoy implementando mi interface, no es necesario redundar o repetir la signacion de tipos para mi parametro y lo que retorna mi funcion
const ciudadGotica: Fun = (ciudadanos) => {
    return ciudadanos.length;
};

console.log(ciudadGotica(["a", "b", "c"]));

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Per {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
    imprimirBio(): void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Per {
    imprimirBio() {
        console.log(this.nombre, this.edad);
    }
    constructor(
        public nombre: string,
        public edad: number,
        public sexo: string,
        public estadoCivil: string
    ) {}
}

const sebas = new Persona("Sebas", 23, "Masculino", "Soltero");
console.log(sebas);
sebas.imprimirBio();
