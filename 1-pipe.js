'use strict';

const pipe = (...fns) => {
    for(const funct of fns){
        if(typeof funct !== 'function'){
            throw new Error('not function');
        }
    }
    return x=> fns.reduce((g,f)=>f(g),x);

}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);

console.log(f(1));
console.log(f(2));
console.log(f(3));
console.log(f(5));

module.exports = { pipe };
