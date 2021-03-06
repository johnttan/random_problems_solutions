function findMaxLength(i, j, maxDiffs, stringOne, stringTwo){
  var totalDiffs = 0;
  var maxLength = 0;
  var length = 0;
  while(true){
    if(i+length > stringOne.length || j+length > stringTwo.length){
      maxLength = Math.max(maxLength, length);
      break;
    }

    if(stringOne[i+length] !== stringTwo[j+length]){
      totalDiffs ++;
    }
    if(totalDiffs > maxDiffs){
      maxLength = Math.max(length, maxLength)
      while(stringOne[i] === stringTwo[j]){
        i ++;
        j ++;
        length --;
      }
      totalDiffs --;
      i++;
      j++;
    }else{
      length ++;
    }
  }
  return maxLength;
}

function processData(input) {
  input = input.split('\n');
  for(var i=0;i<input.length;i++){
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


// processData("3\n\
// 2 tabriz torino\n\
// 0 abacba abcaba\n\
// // 3 helloworld yellomarin")

var fs = require('fs');

var data = fs.readFileSync('substring_diff_test.txt');
processData(String(data));

