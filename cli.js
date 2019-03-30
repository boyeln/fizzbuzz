const fizzbuzz = i =>
  (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i;

const range = (from, to) => [...Array(to + 1).keys()].slice(from);

module.exports = {
  fizzbuzz,
  range
};
