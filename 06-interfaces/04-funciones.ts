(() => {
    // es muy poco comun pero igual puede que sirva

    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let addNumbersFunction: addTwoNumbers;

    // en los parametros de la funcion deberia darme error por no usar parametros y que sean numeros
    addNumbersFunction = () => {
        return 10;
    };
})();
