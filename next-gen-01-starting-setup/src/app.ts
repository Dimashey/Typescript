// Code goes here!

/**
 * Default parameters
 * */

const add = (a: number, b: number = 1) => a + b;

console.log(add(2));

/**
 * Rest parameters
 * */

const addRest = (...numbers: number[]) => {
    return  numbers.reduce((c , a) => c + a, 0)
};

console.log(addRest(1, 3, 4));
