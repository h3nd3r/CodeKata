
var chop1 = require('./chop1.js');

function assert_equal(expected, result){
  console.log(expected == result);
}

assert_equal(-1, chop1.chop1(3, []));
assert_equal(-1, chop1.chop1(3, [1]));
assert_equal(0,  chop1.chop1(1, [1]));

assert_equal(0,  chop1.chop1(1, [1, 3, 5]));
assert_equal(1,  chop1.chop1(3, [1, 3, 5]));
assert_equal(2,  chop1.chop1(5, [1, 3, 5]));
assert_equal(-1, chop1.chop1(0, [1, 3, 5]));
assert_equal(-1, chop1.chop1(2, [1, 3, 5]));
assert_equal(-1, chop1.chop1(4, [1, 3, 5]));
assert_equal(-1, chop1.chop1(6, [1, 3, 5]));

assert_equal(0,  chop1.chop1(1, [1, 3, 5, 7]));
assert_equal(1,  chop1.chop1(3, [1, 3, 5, 7]));
assert_equal(2,  chop1.chop1(5, [1, 3, 5, 7]));

assert_equal(3,  chop1.chop1(7, [1, 3, 5, 7]));
assert_equal(-1, chop1.chop1(0, [1, 3, 5, 7]));
assert_equal(-1, chop1.chop1(2, [1, 3, 5, 7]));
assert_equal(-1, chop1.chop1(4, [1, 3, 5, 7]));
assert_equal(-1, chop1.chop1(6, [1, 3, 5, 7]));
assert_equal(-1, chop1.chop1(8, [1, 3, 5, 7]));
