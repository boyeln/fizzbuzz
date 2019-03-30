const meow = require("meow");
const { fizzbuzz, range } = require("./cli");

const cli = meow(
  `
  Usage
    $ fizzbuzz to [options]

    Options
      --from, -f  Start fizzbuzzing from a specific value. Default: 1
      --help      Shows this text
    
    Example
      $ fizzbuzz 5
      1
      2
      Fizz
      4
      Buzz
`,
  {
    flags: {
      from: {
        alias: "f",
        default: "1",
        type: "string"
      }
    }
  }
);

if (cli.input.length !== 1 || isNaN(cli.input[0]) || isNaN(cli.flags["from"])) {
  cli.showHelp();
}

const to = parseInt(cli.input[0], 10);
const from = parseInt(cli.flags["from"], 10);

const output = range(from, to).map(fizzbuzz);

console.log(output.join("\n"));
