/*
** Binary Search, Day 2
*/
function binary(target, sorted_array, l, r) {

  if (r<l) 
    return -1;

  var mid = Math.floor((l+r)/2);
  if (sorted_array[mid] < target )
    return binary(target, sorted_array, mid + 1, r);
  else if (sorted_array[mid] > target )
    return binary(target, sorted_array, l, mid - 1);
  else 
    return mid;
}

exports.chop = function ( target, sorted_array ) {
  return binary(target, sorted_array, 0, sorted_array.length - 1);

}
