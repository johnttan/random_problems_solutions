function processData(input) {
  function newNode (vert, value){
    return {
      v: vert,
      value: value,
      children: [],
      parent: null
      sum: value
    }
  }
  input = input.split('\n');
  var values = input[1].split(' ').map(function(el){return parseInt(el)});
  var verts = {};
  for(var i=2;i<input.length;i++){
    var temp = input[i].split(' ').map(function(el){return parseInt(el)};
    verts[temp[0]] = verts[temp[0]] || newNode(temp[0], values[temp[0]-1]);
    verts[temp[1]] = verts[temp[1]] || newNode(temp[1], values[temp[0]-1]);
    verts[temp[0]].children.push(verts[temp[1]]);
    verts[temp[1]].parent = verts[temp[0]];
  }

  var root;
  for(var vert in verts){
    if(!verts[vert].parent){
      root = verts[vert];
    }
  };

  var stack = [];
  stack.push(root);
  var returnTable = {};
  while(stack.length > 0){
    var current = stack.pop();
    if(!returnTable[current.v]){
      stack.push(current);
      returnTable[current.v] = true;
      current.children.forEach(function(v){stack.push(v)});
    }else{
      current.children.forEach(function(v){
        current.sum += v.sum;
      })
    }

  }
}
