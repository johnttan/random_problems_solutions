/*
Stock orders as set of pairs (i, j) where j > i; i, j in range N days; i = buy day, j = sell day
Best strategy is to always buy at i and sell at j where j is max price in range i, N-1;
You will never choose to sell at j where it may have been better to buy at j because for k in range j, N-1, if there exists k where k > j, then for all p in i, j, p would have sold at k instead of j
In addition, if you were to buy at j following our strategy, there must be a k in j, N-1 where k is max in that range, and no buy order in 0, j sold at j, which means that j is not the max in j, N-1, and thus there was a better choice than j to sell at.
*/

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
