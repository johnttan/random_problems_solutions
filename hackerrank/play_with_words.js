function checkPalindrome(seq, start, end){
  var isPal = true;
  for(var i=0;i<=Math.floor((end - start)/2);i++){
    isPal = isPal && (seq[start+i] === seq[end-i]);
  }
  return isPal;
}
// Where seq is array of characters
function generateSubPalindromes(seq){
  var palindromes = [];
  for(var i=0;i<seq.length;i++){
    for(var j=0;j<seq.length;j++){
      // [i, j] is a range in seq inclusive
      if(checkPalindrome(seq, i, j)){
        palindromes.push([i, j])
      }
    }
  }
}
