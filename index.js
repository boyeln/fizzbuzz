const meow = require("meow");
const { fizzbuzz } = require("./cli");

const cli = meow(`
  Usage
    $ fizzbuzz n [options]

    Options
      --help  Shows this text
    
    Example
      $ fizzbuzz 5
      1
      2
      Fizz
      4
      Buzz
`);

if (cli.input.length !== 1 || isNaN(cli.input[0])) {
  console.log(cli.help);
  process.exit(1);
}

const to = parseInt(cli.input[0], 10);

for (let i = 1; i <= parseInt(cli.input[0], 10); i++) {
  console.log(fizzbuzz(i));
}
