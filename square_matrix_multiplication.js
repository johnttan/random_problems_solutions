function matrixMultiplication(a, b){
  var result = [];
  for(var i=0;i<a.length;i++){
    result[i] = [];

    for(var j=0;j<a[i].length;j++){
      var sum = 0;

      for(var p=0;p<a.length;p++){
        sum += a[i][p] * b[p][j]
      }

      result[i][j] = sum;
    }
  }

  return result;
}
