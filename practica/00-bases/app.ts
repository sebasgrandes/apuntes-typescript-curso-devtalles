(function () {
    const msg: string = "Hola Mundo, Sebastian Grandes";
    console.log(msg);
    // Transpilas tu TS a JS así: terminal -> `tsc app` o `tsc app.ts`

    const hero = {
        name: "Sebastian Grandes",
        edad: 23,
    };

    hero.edad = 50;

    console.log(hero.edad + 1);
})();
