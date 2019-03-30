const meow = require("meow");
const { fizzbuzz, range, numberToRainbow } = require("./cli");

const cli = meow(
  `
  Usage
    $ fizzbuzz to [options]

    Options
      --raindow, -r   Use beautiful rainbows instead of dull numbers.
      --from, -f      Start fizzbuzzing from a specific value. Default: 1
      --help          Shows this text.
    
    Example
      $ fizzbuzz 15 -rf 10
      Buzz
      🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈
      Fizz
      🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈
      🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈
      FizzBuzz
`,
  {
    flags: {
      from: {
        alias: "f",
        default: "1",
        type: "string"
      },
      rainbow: {
        alias: "r",
        default: false,
        type: "boolean"
      }
    }
  }
);

if (cli.input.length !== 1 || isNaN(cli.input[0]) || isNaN(cli.flags["from"])) {
  cli.showHelp();
}

const to = parseInt(cli.input[0], 10);
const from = parseInt(cli.flags["from"], 10);

let output = range(from, to).map(fizzbuzz);

if (cli.flags["rainbow"]) {
  output = output.map(numberToRainbow);
}

console.log(output.join("\n"));
