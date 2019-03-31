const test = require("ava");
const { fizzbuzz, range, numberToRainbow } = require("..");

test("range", t => {
  t.snapshot(range(0, 15));
  t.snapshot(range(50, 60));

  // Edgecases
  t.snapshot(range(-10, 5));
  t.snapshot(range(5, 3));
});

test("fizzbuzz", t => {
  t.snapshot(range(0, 100).map(fizzbuzz));
});

test("numberToRainbow", t => {
  t.is(numberToRainbow(5), "🌈🌈🌈🌈🌈");
  t.is(numberToRainbow("not number"), "not number");

  // edgecases
  t.is(numberToRainbow("2"), "🌈🌈");
  t.is(numberToRainbow(null), "");
});
