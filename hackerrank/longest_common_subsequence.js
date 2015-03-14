// L1 and L2 are lists
function LCS(L1, L2){
  var table = [];
  // Prepare tables with 0s
  for(var i=0;i<=L1.length;i++){
    var sub = [];
    for(var j=0;j<=L2.length;j++){
      sub[j] = {
        value: 0,
        previous: null,
        decision: null
      };
    }
    table[i] = sub;
  };

  for(var i=1;i<=L1.length;i++){
    for(var j=1;j<=L2.length;j++){
      var xInd = i-1;
      var yInd = j-1;

      if(L1[xInd] === L2[yInd]){
        table[i][j].value = table[xInd][yInd].value + 1;
        table[i][j].decision = L1[xInd];
        table[i][j].previous = table[xInd][yInd];
      }else{
        if(table[i][j-1].value > table[i-1][j].value){
          table[i][j].value = table[i][j-1].value;
          table[i][j].previous = table[i][j-1];
        }else{
          table[i][j].value = table[i-1][j].value;
          table[i][j].previous = table[i-1][j];
        }
      }
    }
  };
  var current = table[L1.length][L2.length];
  var results = [];
  while(true){
    if(current.decision){
      results.push(current.decision)
    }
    var current = current.previous;
    if(current === null){
      return results.reverse().join(' ');
    }
  };
}

// var testOne = [1, 2, 3, 4, 1];
// var testTwo = [3, 4, 1, 2, 1, 3];

// console.log(LCS(testOne, testTwo));

function processData(input) {
  input = input.split('\n');
  var arrayOne = input[1].split(' ');
  var arrayTwo = input[2].split(' ');
  console.log(LCS(arrayOne, arrayTwo));
}
