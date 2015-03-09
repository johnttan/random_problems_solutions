function processData(input) {
  input = input.split('\n');
  var test = parseInt(input[0].split(' ')[1]);
  var treeTable = {};

  // Table to find root node. It will be the one that is not the children of any node.
  var findParent = {};
  for(var i=1;i<input.length;i++){
    var nodeInfo = input[i].split(' ').map(function(el){return parseInt(el)});
    if(!treeTable[nodeInfo[0]]){
      treeTable[nodeInfo[0]] = {
        val: nodeInfo[0],
        children:[]
      };
    };
    if(!treeTable[nodeInfo[1]]){
      treeTable[nodeInfo[1]] = {
        val: nodeInfo[1],
        children:[]
      };
    };
    treeTable[nodeInfo[0]].children.push(nodeInfo[1]);
    findParent[nodeInfo[1]] = true;
  };
  var root;
  for(var node in treeTable){
    if(!findParent[node]){
      root = treeTable[node]
    }
  }

  var pairCount = 0;

  var stack = [];
  stack.push(root);

  console.log(stack)
}

processData('5 2\n\
3 2\n\
3 1\n\
1 4\n\
1 5')