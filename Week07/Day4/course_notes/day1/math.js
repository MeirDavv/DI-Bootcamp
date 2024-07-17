export const multi = (a,b) => {
    return a*b;
}

export const divide = (a,b) => {
    if (b===0)
        return ("Can't divide by 0")
    return a/b;
}

export const plus = (a,b) => {
    return a+b;
}

export const minus = (a,b) => {
    return a-b;
}

export default plus;

// module.exports = {
//     multi,
//     divide,
//     plus,
//     minus
// }