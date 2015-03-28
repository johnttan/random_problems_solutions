var graph = {};

function processData(input) {
  input = input.split('\n');

  input.forEach(function(pair, ind){
    if(ind > 0){
      pair = pair.split(' ');
      graph[pair[0]] = graph[pair[0]] || [];
      graph[pair[1]] = graph[pair[1]] || [];
      graph[pair[0]].push(pair[1]);
      graph[pair[1]].push(pair[0]);
    }
  });
  var visited = {};
  var done = {};
  var size = {};
  var dfsStack = [];

  dfsStack.push("1");
// Run DFS across graph, store size of subtree at each node.
  while(dfsStack.length > 0){
    var current = dfsStack.pop();
    if(!visited[current]){
      dfsStack.push(current);
      visited[current] = true;
      graph[current].forEach(function(v){
        if(!visited[v]){
          dfsStack.push(v);
        }
      });
    }else{
      var sumOfChildren = 0;
      graph[current].forEach(function(child){
        if(done[child]){
          sumOfChildren += size[child];
        }
      })
      size[current] = sumOfChildren + 1;
      done[current] = true;
    };
  };

  var edgeCount = 0;
// Count all subtrees with even size, as they are a subtree that form a component with an even number of nodes.
// Important fact is that subtracting an even component from a larger even component results in 2 event components, thus we are safe in assuming that an even noded
// subtree can be removed optimally.
  for(var v in size){
    if(size[v] % 2 === 0 && v !== "1"){
      edgeCount ++;
    }
  };

  console.log(edgeCount);
}

processData('10 9\n\
2 1\n\
3 1\n\
4 3\n\
5 2\n\
6 1\n\
7 2\n\
8 6\n\
9 8\n\
10 8')
