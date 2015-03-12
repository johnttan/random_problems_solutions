// L1 and L2 are lists
function LCS(L1, L2){
  var table = [];
  // Prepare tables with 0s
  for(var i=0;i<=L1.length){
    var sub = [];
    for(var j=0;j<=L2.length;j++){
      sub[j] = {
        value: 0,
        previous: []
      };
    }
    table[i] = sub;
  };

  for(var i=1;i<=L1.length){
    for(var j=1;j<=j.length;j++){
      var xInd = i-1;
      var yInd = j-1;

      if(L1[xInd] === L2[yInd]){
        table[i][j].value = table[xInd][yInd].value + 1;
      }else{
        if(table[i][j-1].value > table[i-1][j].value){
          table[i][j].value = table[i][j-1].value;
          table[i][j].previous = [i, j-1];
        }else{
          table[i][j].value = table[i-1][j].value;
          table[i][j].previous = [i-1, j];
        }
      }
    }
  };


}

function processData(input) {

}
