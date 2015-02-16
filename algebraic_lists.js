Cons.fromArray = function(array){
  //TODO provide a convenient method to convert a JavaScript array
  //to an algebraic list.
  var result;
  var current;
  array.forEach(function(el){
    if(result){
      current.tail = new Cons(el);
      current = current.tail;
    }else{
      result = new Cons(el);
      current = result;
    }
  });
  return result;
};

function filter(list, predicate){
  //TODO: return a new list containing only elements
  //that satisfy the predicate function.
  if(list){
    var result;
    var currentRes;
    var current = list;
    while(current){
      if(predicate(current.head)){
        if(result){
          currentRes.tail = new Cons(current.head);
          currentRes = currentRes.tail;
        }else{
          result = new Cons(current.head);
          currentRes = result;
        }
      }
      current = current.tail;
    }
    return result;
  }
  return null;
}

function map(list, mapper){
  //TODO: return a new list containing all elements
  //resulting from applying the mapper functiont to them
  if(list){
    var current = list;
    var result;
    var currentRes;

    while(current){
      if(result){
        currentRes.tail = new Cons(mapper(current.head));
        currentRes = currentRes.tail;
      }else{
        result = new Cons(mapper(current.head));
        currentRes = result;
      }
      current = current.tail;
    }

    return result;
  }
  return null;
}

Cons.prototype.filter = function(predicate){ return filter(this,predicate); };
Cons.prototype.map = function(mapper){ return map(this, mapper); };
