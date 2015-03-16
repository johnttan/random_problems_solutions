function generateSubstrs(input){
  var substrings = [];
  for(var i=0;i<input.length;i++){
    for(var j=1; i + j <= input.length;j++){
      substrings.push(input.substr(i, j).split('').sort());
    }
  }
  substrings.sort();
  return substrings.map(function(el){return el.join('')});
}

function processData(input) {
  input = input.split('\n');
  for(var i=1;i<input.length;i++){
    var subs = generateSubstrs(input[i]);
    var k = 0;
    var count = 0;
    while(k<subs.length){
      if(subs[k] === subs[k+1]){
        count ++;
        k += 2;
      }else{
        k ++;
      }
    }
    console.log(count);
  }
}

processData('2\n\
abba\n\
abcd')
