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
  var results = "";
  var tempOne = minusOne
  while(tempOne > 0){
    results += tempOne % 10;
    tempOne = Math.floor(tempOne / 10);
  }
  console.log(results.split('').reverse().join(''), minusOne);
}

processData('0 1 10');
