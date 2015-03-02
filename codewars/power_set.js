function power(s) {
  var sets = [[]];
  s.forEach(function(el){
    sets.forEach(function(el2){
      sets.push(el2.concat( [el]));
    })
  });
  return sets;
}
