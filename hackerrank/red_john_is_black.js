function generateArranges(N){
  var table = [1, 1, 1, 1];
  var counter = 4;
  while(counter <= N){
    table[counter] = table[counter-1] + table[counter-4];
    counter ++;
  }
  return table[counter-1];
}

function numPrimesEras(N){
  if(N >= 2){
    var count = 1;
    var table = [];
    for(var i=2;i<=N;i++){
      table.push(i);
    };
    var p = 2;
    var pInd = 0;
    while(true){
      for(var j=pInd;table[j]<=N;j+=p){
        table[j] = 0;
      }
      var found = false;
      // Setting i=pInd is critical optimization.
      for(var i=pInd;i<table.length;i++){
        if(table[i] > 0){
          p = table[i];
          pInd = i;
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
  input = input.split('\n');
  for(var i=1;i<input.length;i++){
    console.log(numPrimesEras(generateArranges(parseInt(input[i]))))
  }
}

// processData("2\n\
// 1\n\
// 7")
var start = Date.now();
processData("19\n\
16\n\
8\n\
40\n\
24\n\
26\n\
17\n\
39\n\
23\n\
40\n\
39\n\
1\n\
24\n\
21\n\
39\n\
34\n\
37\n\
9\n\
28\n\
6")
var end = Date.now();
console.log("TIME:", end - start)
