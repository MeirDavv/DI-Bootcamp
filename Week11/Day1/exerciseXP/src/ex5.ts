
type NumberOrString = string | number;

function add(a:NumberOrString, b:NumberOrString):NumberOrString {
    if (typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }
    if (typeof a === 'string' && typeof b === 'string'){
        return a+b;
    }
    throw new Error('Error, received a number and a string');
}