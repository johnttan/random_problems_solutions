/*
Generate all substrings in O(N^2). It is quadratic because the total number of operations is the sum of the series n, n-1, n-2 .... 1
*/
function generateSubstrs(input){
  var substrings = [];
  for(var i=0;i<input.length;i++){
    for(var j=1; i + j <= input.length;j++){
      //3N operations on current substring
      substrings.push(input.substr(i, j).split('').sort());
    }
  }
  // O(nlogn) preprocessing step to help figure out anagram pairs
  substrings.sort();
  return substrings.map(function(el){return el.join('')});
}

function processData(input) {
  input = input.split('\n');
  for(var i=1;i<input.length;i++){
    var subs = generateSubstrs(input[i]);
    var k = 0;
    var count = 0;
    // O(N^2) iteration through all substrings.
    while(k<subs.length){
      var z = k+1;
      // Iterate through all duplicates to count each one as a pair.
      while(subs[k] === subs[z]){
        count ++;
        z ++;
      }
      k ++;
    }
    console.log(count);
  }
}

processData('2\n\
abba\n\
abcd')

processData('5\n\
pvmupwjjjf')
