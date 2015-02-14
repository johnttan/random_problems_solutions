function namespace(root, path, value){
  if(value != undefined){
    var keys = path.split(".");
    var current = root;
    for(var i=0;i<keys.length-1;i++){
      var el = keys[i];
      if(current.hasOwnProperty(el)){
        current = current[el];
      }else{
        current[el] = {};
        current = current[el];
      }
    };
    current[keys[keys.length-1]] = value;
  }else{
    var keys = path.split(".");
    var current = root;
    for(var i=0;i<keys.length-1;i++){
      var el = keys[i];
      if(current.hasOwnProperty(el)){
        current = current[el];
      }else{
        return undefined;
      }
    };
    return current[keys[keys.length-1]];
  }
  return root;
}
