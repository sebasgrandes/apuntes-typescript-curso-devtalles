// namespace es un agrupador global, que puede permitir que se muestre afuera lo que yo quiero

namespace Validations {
    export const validateText = (text: string): boolean => {
        return text.length > 3 ? true : false;
    };
    export const validateDate = (myDate: Date): boolean => {
        return isNaN(myDate.valueOf()) ? false : true;
    };
}

console.log(Validations.validateText("Fer"));
