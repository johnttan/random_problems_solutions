function processData(input) {
  input = input.split('\n');
  for(var i=1;i<input.length;i+=2){
    var table = {};
    for(var j=0;j<input[i].length;j++){
      table[input[i][j]] = true;
    }
    for(var k=0;k<input[i+1].length;k++){
      if(table[input[i+1][k]]){
        console.log("YES");
        break;
      }
      if(k === input[i+1].length -1){
        console.log("NO");
        break;
      }
    }
  }
}

// processData('2\n\
// hello\n\
// world\n\
// hi\n\
// world')
