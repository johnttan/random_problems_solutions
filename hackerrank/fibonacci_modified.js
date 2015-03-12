function processData(input) {
  input = input.split(' ').map(function(el){
    return parseInt(el)
  })

  var minusTwo = input[0];
  var minusOne = input[1];
  var N = input[2];
  var n = 2;
  while(n < N){
    var temp = minusOne;
    minusOne = Math.pow(minusOne, 2) + minusTwo;
    minusTwo = temp;
    n ++;
  };

  console.log(minusOne);
}
