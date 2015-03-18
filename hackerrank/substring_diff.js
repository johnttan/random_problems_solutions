function findMaxLength(i, j, maxDiffs, stringOne, stringTwo){
  var totalDiffs = 0;
  var maxLength = 0;
  var length = 0;
  console.log("STRING", stringOne)
  while(true){
    if(i > stringOne.length - 1 || j > stringTwo.length -1){
      // console.log("returning", i, j, stringOne.length)
      return Math.max(maxLength, length);
    }

    if(stringOne[i] !== stringTwo[j]){
      totalDiffs ++;
    }
    console.log(i, j, totalDiffs)
    if(totalDiffs > maxDiffs){
      maxLength = Math.max(length, maxLength)
      while(stringOne[i] === stringTwo[j]){
        // console.log('contracting', i, j)
        // if(i > stringOne.length - 1 || j > stringTwo.length -1){
        //   return Math.max(maxLength, length);
        // }
        i ++;
        j ++;
        length --;
      }
      totalDiffs --;
    }else{
      length ++;
    }
    i++;
    j++;
    console.log(i, j, totalDiffs)

  }
}

function processData(input) {
  input = input.split('\n');
  for(var i=1;i<input.length;i++){
    input[i] = input[i].split(' ');
    maxDiffs = parseInt(input[i][0]);
    strOne = input[i][1];
    strTwo = input[i][2];
    var best = 0;
    for(var z=0;z<strOne.length;z++){
      best = Math.max(best, findMaxLength(0, z, maxDiffs, strOne, strTwo), findMaxLength(z, 0, maxDiffs, strOne, strTwo))
    }
    console.log(best);
  }
}


processData("3\n\
2 tabriz torino\n\
0 abacba abcaba\n\
3 helloworld yellomarin")
