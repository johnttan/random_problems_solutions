function solve(prices){
  var profits = 0;
  var maxPrice = [];
  maxPrice[prices.length-1] = prices[prices.length-1];
  for(var j=prices.length-2;j>=0;j--){
    maxPrice[j] = Math.max(maxPrice[j+1], prices[j+1])
  }
  prices.forEach(function(el, i){
    profits += Math.max(maxPrice[i] - el, 0);
  })
  return profits;
}

function processData(input) {
  input = input.split('\n');
  var tests = [];
  for(var i=2;i<input.length;i+=2){
    tests.push(input[i].split(' ').map(function(el){return parseInt(el)}));
  }
  tests.forEach(function(el){
    console.log(solve(el));
  })
}


processData('3\n\
3\n\
5 3 2\n\
3\n\
1 2 100\n\
4\n\
1 3 1 2')
