function brainLuck(code, input){
  var input = input.split("").reverse();
  var output = "";
  var gotoSymbols = "[]";
  var gotos = {};
  var gotoStack = [];

  var memory = {0:0};
  var instructionPointer = 0;
  var memoryPointer = 0;

  var symbolFuncs = {
    ">": function(){
      memoryPointer ++;
      if(memory[memoryPointer] === undefined){
        memory[memoryPointer] = 0;
      }
      instructionPointer ++;
    },
    "<": function(){
      memoryPointer --;
      if(memory[memoryPointer] === undefined){
        memory[memoryPointer] = 0;
      }
      instructionPointer ++;
    },
    "+": function(){
      memory[memoryPointer] = memory[memoryPointer] + 1;
      if(memory[memoryPointer] > 255){
        memory[memoryPointer] = 0;
      }
      instructionPointer ++;
    },
    "-": function(){
      memory[memoryPointer] --;
      if(memory[memoryPointer] < 0){
        memory[memoryPointer] = 0;
      }
      instructionPointer ++;
    },
    ".": function(){
      output += String.fromCharCode(memory[memoryPointer]);
      instructionPointer ++;
    },
    ",": function(){
      memory[memoryPointer] = input.pop().charCodeAt(0);
      instructionPointer ++;
    },
    "[": function(){
      if(memory[memoryPointer] === 0){
        instructionPointer = gotos[instructionPointer] + 1;
      }else{
        instructionPointer ++;
      }
    },
    "]": function(){
      if(memory[memoryPointer] !== 0){
        instructionPointer = gotos[instructionPointer] + 1;
      }else{
        instructionPointer ++;
      }
    }
  };

  for(var i=0;i<code.length;i++){
    if(gotoSymbols[0] === code[i]){
      gotoStack.push({
        char: code[i],
        ind: i
      })
    }else if(gotoSymbols[1] === code[i]){
      var closing = gotoStack.pop();
      gotos[i] = closing.ind;
      gotos[closing.ind] = i;
    }
  };

  var start = Date.now();
  while(instructionPointer < code.length){
    if(Date.now() - start > 2000){
      instructionPointer = code.length + 1;
    }else{
      symbolFuncs[code[instructionPointer]]();
    }
  }
  return output;
}
