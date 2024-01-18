(() => {
    const addNumer = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const savetheWorld = () => `El mundo está salvado`;
    const nothing = () => undefined;

    // inferida -> any
    let cam;
    cam = greet;
    console.log(cam("Andrea"));

    let cam0: Function;
    cam0 = addNumer;
    console.log(cam0(2, 2));

    // ! recuerda siempre leer la ayuda sombreando el mouse sobre las funciones que mandas a llamar para ver su tipo de dato y estructura

    // ! declarando
    let cam1: (a: number, b: number) => number;
    cam1 = addNumer;
    console.log(cam1(1, 2));

    let cam2: (c: string) => string;
    cam2 = greet;
    console.log(cam2("Sebastian Grandes"));

    // ni se te ocurra poner en los parametros a:void, ESO NO EXISTE

    let cam3: () => string;
    cam3 = savetheWorld;
    console.log(cam3());

    let cam4: () => void; /* también podrías ponerle undefined */
    cam4 = nothing;
    console.log(cam4());
})();
