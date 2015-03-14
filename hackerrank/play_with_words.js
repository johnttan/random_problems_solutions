function LPS(someString){
  var table = [];
  for(var i=0;i<someString.length;i++){
    var newA = [];
    table[i] = newA;
  }

  for(var j=0;j<table.length;j++){
    for(var i=table.length-1;i>=0;i--){
      if(i > j){
        table[i][j] = 0
      }
      else if(i === j){
        table[i][j] = 1
      }
      else if (someString[i] === someString[j]){
        table[i][j] = table[i+1][j-1] + 2;
      }else{
        if(i === table.length-1){
          table[i][j] = table[i, j-1]
        }else if(j === 0){
          table[i][j] = table[i+1, j]
        }else{
          table[i][j] = Math.max(table[i+1][j], table[i][j-1])
        }
      }
    }
  }
  return table;
}


function bestFactor(someString){
  var table = LPS(someString);
  var maxFactor = 0;
  for(var i=0;i<someString.length;i++){
    var factor;
    if(i === 0 || i === someString.length -1){
      factor = table[0][someString.length-1]
      if(factor > maxFactor){
        maxFactor = factor
      }
    }else{
      factor = table[0][i] * table[i+1][someString.length-1]
      if(factor > maxFactor){
        maxFactor = factor
      }
    }
  }
  return maxFactor;
}
// var test = LPS("eeeg");
// var table = "";
// for(var j=0;j<test.length;j++){
//   for(var i=0;i<test[j].length;i++){
//     table += test[i][j].toString() + ' ';
//   }
//   table += '\n'
// }
// console.log(table);

// console.log(bestFactor("eeegeeksforskeeggeeks"))
