
var chop = require('./chop1.js');

function assert_equal(expected, result){
  console.log(expected == result);
}

console.log("Chop1:");

assert_equal(-1, chop.chop(3, []));
assert_equal(-1, chop.chop(3, [1]));
assert_equal(0,  chop.chop(1, [1]));

assert_equal(0,  chop.chop(1, [1, 3, 5]));
assert_equal(1,  chop.chop(3, [1, 3, 5]));
assert_equal(2,  chop.chop(5, [1, 3, 5]));
assert_equal(-1, chop.chop(0, [1, 3, 5]));
assert_equal(-1, chop.chop(2, [1, 3, 5]));
assert_equal(-1, chop.chop(4, [1, 3, 5]));
assert_equal(-1, chop.chop(6, [1, 3, 5]));

assert_equal(0,  chop.chop(1, [1, 3, 5, 7]));
assert_equal(1,  chop.chop(3, [1, 3, 5, 7]));
assert_equal(2,  chop.chop(5, [1, 3, 5, 7]));

assert_equal(3,  chop.chop(7, [1, 3, 5, 7]));
assert_equal(-1, chop.chop(0, [1, 3, 5, 7]));
assert_equal(-1, chop.chop(2, [1, 3, 5, 7]));
assert_equal(-1, chop.chop(4, [1, 3, 5, 7]));
assert_equal(-1, chop.chop(6, [1, 3, 5, 7]));
assert_equal(-1, chop.chop(8, [1, 3, 5, 7]));

console.log("\nChop2:");
var chop = require('./chop2.js');
assert_equal(-1, chop.chop(3, []));
assert_equal(-1, chop.chop(3, [1]));
assert_equal(0,  chop.chop(1, [1]));

assert_equal(0,  chop.chop(1, [1, 3, 5]));
assert_equal(1,  chop.chop(3, [1, 3, 5]));
assert_equal(2,  chop.chop(5, [1, 3, 5]));
assert_equal(-1, chop.chop(0, [1, 3, 5]));
assert_equal(-1, chop.chop(2, [1, 3, 5]));
assert_equal(-1, chop.chop(4, [1, 3, 5]));
assert_equal(-1, chop.chop(6, [1, 3, 5]));

assert_equal(0,  chop.chop(1, [1, 3, 5, 7]));
assert_equal(1,  chop.chop(3, [1, 3, 5, 7]));
assert_equal(2,  chop.chop(5, [1, 3, 5, 7]));

assert_equal(3,  chop.chop(7, [1, 3, 5, 7]));
assert_equal(-1, chop.chop(0, [1, 3, 5, 7]));
assert_equal(-1, chop.chop(2, [1, 3, 5, 7]));
assert_equal(-1, chop.chop(4, [1, 3, 5, 7]));
assert_equal(-1, chop.chop(6, [1, 3, 5, 7]));
assert_equal(-1, chop.chop(8, [1, 3, 5, 7]));


