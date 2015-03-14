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
        table[i][j] = table[i+1][j-1] + 1;
      }else{
        table[i][j] = Math.max(table[i+1, j], table[i, j-1])
      }
    }
  }
  return table;
}

var test = LPS("eeeg");
var table = "";
for(var i=0;i<test.length;i++){
  for(var j=0;j<test[i].length;j++){
    table += test[i][j].toString() + ' ';
  }
  table += '\n'
}
console.log(table);
