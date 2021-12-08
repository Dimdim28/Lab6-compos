'use strict';

const compose = (...fns) => {
    const errors = [];
    const composed = x => {
      if (fns.length === 0) return x;
      const last = fns.length - 1;
      let res = x;
      try {
        for (let i = last; i >= 0; i--) {
          res = fns[i](res);
        }
        return res;
      } catch (error) {
        for (const err of errors) {
          err(error);
        }
      }
    };
    composed.on = (name, err) => {
      if (name === 'error') errors.push(err);
    };
    return composed;
  };


const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(inc, twice, cube);

console.log(f(1));
console.log(f(2));
console.log(f(3));
console.log(f(5));

module.exports = { compose };
