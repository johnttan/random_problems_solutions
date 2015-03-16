function processData(input) {
  input = input.split('\n');
  for(var i=1;i<input.length;i++){
    if(input[i].length % 2 !== 0){
      console.log(-1);
      continue;
    }else{
      var common = 0;
      var table = {};
      for(var j=0;j<input[i].length / 2;j++){
        table[input[i][j]] = table[input[i][j]] || 0;
        table[input[i][j]] ++;
      };
      for(var z=input[i].length/2;z<input[i].length;z++){
        table[input[i][z]] = table[input[i][z]] || 0;
        if(table[input[i][z]] > 0){
          common ++;
          table[input[i][z]] --;
        }
      };
      console.log(input[i].length/2 - common);
    }
  }
}

processData("6\n\
aaabbb\n\
ab\n\
abc\n\
mnop\n\
xyyx\n\
xaxbbbxx")
