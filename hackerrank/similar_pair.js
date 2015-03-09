function processData(input) {
  input = input.split('\n');
  var test = parseInt(input[0].split(' ')[1]);
  var treeTable = {};
  for(var i=1;i<input.length){
    var nodeInfo = input[i].split(' ').map(function(el){return parseInt(el)});
    if(!treeTable[nodeInfo[0]]){
      treeTable[nodeInfo[0]] = {
        children:[]
      };
    };
    if(!treeTable[nodeInfo[1]]){
      treeTable[nodeInfo[1]] = {
        children:[]
      };
    };
    treeTable[nodeInfo[0]].children.push(nodeInfo[1]);
  };

  console.log(treeTable);
}

processData('5 2\n\
3 2\n\
3 1\n\
1 4\n\
1 5')
