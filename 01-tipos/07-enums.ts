(() => {
    // las enumeraciones es una forma de manejar numeros

    // min empieza desde 0 por defecto y los demás solo aumentan en 1
    enum AudioLevel {
        min = 1,
        medium,
        max = 20,
    }

    let asignadito: AudioLevel = AudioLevel.medium;

    console.log(asignadito);
    console.log(AudioLevel);
})();
