(() => {
    const nombre1: string = "Sebastian";
    const nombre2: string = "Andrea";
    const nombre3: string = `Andre`;

    // al definir el tipo de variable el autocompletado mejora para dicho tipo
    console.log(nombre1);
    console.log(nombre2);
    console.log(nombre3.toUpperCase());
    console.log(
        `Mi nombre es: ${nombre1}, mi enamorada se llama ${nombre2} y nuestro nombre junto es ${
            nombre3[50]?.toUpperCase() || "jejeje"
        }`
    );
    // el operador ? tiene diferentes significados en js segun su contexto
    // en este caso: si nombre3[50] existe y tiene un método toUpperCase, se invocará ese método. Si nombre3[50] no existe o es null o undefined, entonces el resultado de toda la expresión será la cadena de texto "jejeje".
})();
