function generateArranges(N){
  var table = [1, 1, 1, 1];
  var counter = 4;
  while(counter <= N){
    table[counter] = table[counter-1] + table[counter-4];
    counter ++;
  }
  return table[counter-1];
}

function numPrimes(N){
  if(N >= 2){
    var count = 1;
    var table = [];
    for(var i=2;i<=N;i++){
      table.push(i);
    };
    var p = 2;
    while(true){
      for(var j=0;table[j]<=N;j+=p){
        table[j] = 0;
      }
      var found = false;
      for(var i=0;i<table.length;i++){
        if(table[i] > 0){
          p = table[i];
          found = true;
          count ++;
          break;
        }
      }
      if(!found){
        return count;
      }
    }
  }else{
    return 0
  }
}

function processData(input) {
  input = input.split('\n').map(function(el){return parseInt(el)});
  for(var i=1;i<input.length;i++){
    console.log(numPrimes(generateArranges(input[i])))
  }
}

processData("2\n\
1\n\
7")
