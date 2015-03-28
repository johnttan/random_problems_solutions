var graph = {};

function processData(input) {
  input = input.split('\n');

  input.forEach(function(pair){
    pair = pair.split(' ');
    graph[pair[0]] = graph[pair[0]] || [];
    graph[pair[1]] = graph[pair[1]] || [];
    graph[pair[0]].push(pair[1]);
    graph[pair[1]].push(pair[0]);
  });
  var visited = {};
  var size = {};
  var dfsStack = [];

  dfsStack.push("1");

  while(dfsStack.length > 0){
    var current = dfsStack.pop();
    if(!visited[current]){
      dfsStack.push(current);
    }else{
      var sumOfChildren = 0;
      graph[current].forEach(function(child){
        sumOfChildren += size[child];
      })
      size[current] = sumOfChildren + 1;
    };
    visited[current] = true;
    graph[current].forEach(function(v){
      if(!visited[v]){
        dfsStack.push(v);
      }
    });
  }
}
