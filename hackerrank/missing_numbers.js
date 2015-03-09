function processData(input) {
  var lines = input.split('\n');
  var listOne = lines[1].split(' ').map(function(el){return parseInt(el)});
  var listTwo = lines[3].split(' ').map(function(el){return parseInt(el)});
  var oneTable = {};
  var twoTable = {};

  listOne.forEach(function(el){
    oneTable[el] = oneTable[el] || 0;
    oneTable[el] ++;
  })

  listTwo.forEach(function(el){
    twoTable[el] = twoTable[el] || 0;
    twoTable[el] ++;
  })
  var results = [];
  for(var letter in twoTable){
    if(!oneTable[letter] || oneTable[letter] < twoTable[letter]){
      results.push(letter)
    }
  };
  results.sort();
  console.log(results.join(' '));
}

processData('10\n\
203 204 205 206 207 208 203 204 205 206\n\
13\n\
203 204 204 205 206 207 205 208 203 206 205 206 204')
