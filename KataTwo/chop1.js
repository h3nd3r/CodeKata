/*
** Binary Search, Day 1
*/

// avoid floating point results when dividing
function divide ( n, d ) {
    var r = n % d;
    return ( n - r ) / d;
};

exports.chop1 = function ( target, sorted_array ) {

  var l = 0; var r = sorted_array.length - 1;  var mid;

  while(r >= l) {
    mid = divide((l + r), 2);
    if (sorted_array[mid] < target)
      l = mid + 1;
    else if (sorted_array[mid] > target)
      r = mid - 1;
    else
      return mid;
  }
  // not found
  return -1;
}


