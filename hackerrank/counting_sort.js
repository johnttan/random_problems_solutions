function processData(input) {
    var countTable = [];
    var max = 0;
    input = input.split('\n');
    input = input.map(function(el, ind){
        if(ind > 0) {
            var elAr = el.split(' ');
            elAr[0] = parseInt(elAr[0]);
            if(countTable[elAr[0]] === undefined){
               countTable[elAr[0]] = 0;
            }
            countTable[elAr[0]] ++;
            if(elAr[0] > max){
                max = elAr[0];
            }
            if(ind < input.length / 2){
                elAr[2] = true;
            }else{
                elAr[2] = false;
            }
          return elAr
        }

    });
    var subTotal = 0;
    for(var i=0;i<=max;i++){
        var oldCount = countTable[i];
        countTable[i] = subTotal;
        subTotal += oldCount;
    };
    var results = [];
    input.forEach(function(el, ind){
        if(ind > 0){
            results[countTable[el[0]]] = el;
            countTable[el[0]] ++;
        }

    })
    results.forEach(function(el, ind){
        if(el[2]){
            process.stdout.write('-');
        }else{
            process.stdout.write(el[1]);
        }
        if(ind < results.length-1){
            process.stdout.write(' ');
        }
    });
}
