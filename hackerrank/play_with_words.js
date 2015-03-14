function LPS(someString){
  var table = [];
  for(var i=0;i<someString.length;i++){
    var newA = [];
  }

  for(var i=0;i<table.length;i++){
    for(var j=table.length-1;j>=0;j--){
      if(i > j){
        table[i][j] = 0
      }
      else if(i === j){
        table[i][j] = 1
      }
      else if (someString[i] === someString[j]){
        table[i][j] = table[i+1][j-1] + 1;
      }else{
        table[i][j] = Math.max(table[i+1, j], table[i, j-1])
      }
    }
  }
  return table;
}

var test = LPS("eeeg");
console.log(test);
