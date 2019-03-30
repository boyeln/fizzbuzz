# fizzbuzz
FizzBuzz CLI

## Usage


Install using yarn:

```
yarn global add @boyeborg/fizzbuzz
```

or if you prefer npm:

```
npm install --global @boyeborg/fizzbuzz
```

Use `fizzbuzz --help` to display help text.

## Onliner

The fizzbuzz problem can be solved using one line of code in nodejs:

```
console.log([...Array(101).keys()].slice(1).map(i => (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i).join("\n"));
```
