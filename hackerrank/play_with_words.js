// The overall strategy involves using the base LPS dynamic programming solution with recurrece relations:
/*
for string S:
LPS(i, j) = (
  if S[i] == S[j]:
    return LPS(i+1, j-1)
  else:
    return Max(LPS(i+1, j), LPS(i, j-1))
)
*/
// This is a variant of the longest common subsequence problem. The first case is due to the fact that if the prefix and suffix are the same, then
// the longest palindrome subsequence is the LPS of the inner sequence + 2.
// In the second case, if the prefix and suffix are not the same, we can reduce the problem space by concluding that either the LPS contains the prefix or it contains the suffix, and taking the max of both cases.
// The strategy to save space for the specific problem of finding the largest possible factor of non-overlapping LPSs problem is to only save the previous row and the current row, as the recurrence relation only depends on i+1 and j-1
// You also have to save the values in the table associated with the range starting at 0, ending at i and starting at i, ending in 0. This results in 2 arrays of length N each.
//This only takes O(N) space vs the O(N^2) space of constructing the full table.
function LPS(someString){
  var table = [];
  var previousRow = [];

  var currentRow = 0;
  var firstSegmentLPS = [];
  var secondSegmentLPS = [];
  for(var j=0;j<someString.length;j++){
    for(var i=someString.length-1;i>=0;i--){
      if(i > j){
        table[i] = 0
      }
      else if(i === j){
        table[i] = 1
      }
      else if (someString[i] === someString[j]){
        table[i] = previousRow[i+1] + 2;
      }else{
        if(i === table.length-1){
          table[i] = previousRow[i]
        }else if(j === 0){
          table[i] = table[i+1]
        }else{
          table[i] = Math.max(table[i+1], previousRow[i])
        }
      }
      if(i === 0){
        firstSegmentLPS[j] = table[i];
      }
      if(j === someString.length-1){
        secondSegmentLPS[i] = table[i];
      }
    }
    var previousRow = table;
    table = [];
  }
  return [firstSegmentLPS, secondSegmentLPS];
}


function bestFactor(someString){
  var table = LPS(someString);
  var maxFactor = 0;
  for(var i=0;i<someString.length;i++){
    var factor;
    if(i === 0 || i === someString.length -1){
      factor = table[0][someString.length-1]
      if(factor > maxFactor){
        maxFactor = maxFactor
      }
    }else{
      factor = table[0][i] * table[1][i+1]
      if(factor > maxFactor){
        maxFactor = factor
      }
    }
  }
  return maxFactor;
}
function processData(input){
  console.log(bestFactor(input))
}
// var test = LPS("eeeg");
// var table = "";
// for(var j=0;j<test.length;j++){
//   for(var i=0;i<test[j].length;i++){
//     table += test[i][j].toString() + ' ';
//   }
//   table += '\n'
// }
// console.log(table);

// console.log(bestFactor("eeegeeksforskeeggeeks"))
// var start = Date.now();
// processData("lklddhkidgffdkhhkcjkefjlejhkkfihgiiiiddkcihejcdjdkfhjdhkjffjjdcghidgkicffelfekgkljjfclcffjdjgeeeieijhfckcecgfgldghjeicldhfidecglldhjelhfcjeifhjedgflihklfgjjhhcfgglldlhfjlgjicihfigcegifechgkihcchjceifhihjciggihjhgciedgfeffhiegijehjlhkclehiikeegjjfhdfdhkcgglilhhieedgdkfkfhfgekjjfklfgfjhfelekljdkfejgjccggjhcjhcjldcefekgghgkeklkgcfefchegkhgceljkklcgcfllchlddcghhggfhfffhkdefgidfhjlikcidclcedekhghlgejkijkfkfigfccekjcieckkeljhfekdfgidhlchfhlfllldfdfehhdikhlfjjeflkjdhhkkjjhdeecejfchklfhkeieljjhgigdllfidleijghlijkkiijligdfcldfiehhkhglikcggkddhkfgchhjhhkfefejghklfeichcdkfejicfdccjicdkdjigccjlhhkecceghhijgcekefliijilhgijicjhgjkkclcgefhjdjhhjkkkjgkdcfjffleickffdcdhcjcfflgdchfdfkjdecleheiegeehkjgcdflekjfikhhkfikdkejefkelkceklhlcckgecleldjhckiekchkiklecljjgggklighcfjdcgefcgcdlicfhlfgckhfjekejelgckgldfifjifccdckfdiflgkicigfjdihdldcflciicgclkdkgekfigklcjkdjecjecehhkkgifgcgifijljejjckfjeicghfifehjedclcjidicglhjfcdcehhlldjgjjckjlchgdeklkfcfcgggiehelehgjhkhhjigidiicjhcifkekjdkjhddhiicjkkkdjffdglhgckkcgejcihikjcifigdfgfiicecedckglgdfjkdkcelifhjcflhllfgceflilgkcfeldjhljcekljhgfgkgcffgkcddelkgiifhggjkifhceikgcfidfljfkghllgikllkdecikjhgkehkgdlehjkkjgjhjfhhjilhkhlkiedjlkkfkhhjlhdjdccdkcfihcgghigfgkcdkcjjjghfelcjgigfccikigijcdkgicgeedhffhfkgkcjdcjkgfjehfgjiefickchgcfchkcldjfhlfilfkfldhekhjdijkhglhgkiilihkhgdehjkigjfdfjgghckkddjcffcjiciidhggilichkjldljegjkfdjfcejldegjeecfljfldldkiidkffclkedljheejhgjceeglhlkflefhdgjfdcileecigeccgdifcicfkhliflfhhgjecdfccgdigffkgdkilfijceelhfljfijiccdklkclccgilgkhekggdcgjhjccdkldccicckkdcchgghgjhdfghfclclikkdfdffieflkcchdjdgcdjilgdlkegikceghikfdffeglkhkfilchhekhdicchkclciceddccekihcfhfgjcfkghceigfjglfdheciehcdfhcgfkdiiclhiceifcgidejcklidiieckkfdkkkejigljhgffgjjldffddfjdgcghkeicidgdhcjkjehgdhehlhghljfddgiiclgeijcikeckedffgihfledkfcfefffldkfkhdlkfcdhlikefhkdlflgcgkickfffhigfggkfccjdjedkedigjdhjcgcggfijgjgdkejhijigfgkfljldhdffkkkliiedhiegkfjkgigfdcdegeilfkcegekglcjkidjffceiekdkhedkkfefjidhfhgkiiillielhdfgclflcjhkjhcldfhcejcdkdlkckhdfdlchilcgkheliflkkdkcggilejfdciekhgldggffgkfjejeljhfkljkgjfchcfdlihjjihgigilfjcjgcjjcflhjdleijeghgielckifikejglkekcfjcljdeeckddkjgkfidlcfkgdjjclfjlcfjjekffhickllfigddjfdcgdllgekjkjhldikighjdecfhhigchleechihjkhlkiihdfcjcjhjliedjhligediehihecicckccgghdilffifkgflljlckdkjcikggchgggfidchjijhjhcfefdglkidjgefcegkdcgfjckejgjdgihhdhflceciilfkkckdfgihcefllgceihgjecikceldgcfjcjgjhllkelgfelhhefhkdccdgigdiddccehjjecjdlkjcllhegfgllflcgcccgcfdkhdjejikcfgejhkdeldkhcflfcgdhhfdkikkkhkhgegkcjggcjlifkedcfciidkghhlhjcjhjcdddilkeficdfcekidfecldddjf");
// var stop = Date.now();
// console.log(stop - start);

// var start = Date.now();
// processData("zyyxxyzxzxzyzyxzzyxxzxyzyyzxzzzyyxyyzzzxzzxxzzxzxyzzzxzyxxxzxzxxxyyxyxxxzxzyxyyxxxzxxzyxxxxyxyyzzxxxxyxyzxxyyzxxzyzxxzyzyxyxyyxyxyzxzzzzyxxzxxzxzxyyxyyzxyyyxyyxzxxyzzyzyyyyzyzxzyxyxzxxyyzzxzzzyyzyyzzzyyxxxzxxyyzyyxxyzzxxzzxzyyzyyzzyzzxyxyxxzyxxyxxxxyyyyzzyzxyzzzyxyyxzzxyyzyzxxzzyzyzzzzxyzzyyxxzyzxzyxxzyyzzxxzxyzxyyzzyxyzyzzxxzzyyzzxxxxyzzxxyzzyyyzxzzyzxyyxxzzxyxxzzzxzxyyzyxzzxzyzyzyzxzyxzyzzyyyzyyxzzyzyyzyyxyxyzzzzyyzzyyyxzxyxyyyzzzzyzzzxxzyzxzzxyzxzzzzzzyyzzyyzyxxzzyyyxzyyyyxxxxzxzzxzzzyxxxzxzxyzzxxyzzxzzxzxyyzyyyxyxyxxyxxzxxzzyzxyzzzyzzxyxzxzxzzzyyzyyzyxzyyzyzyxyyyyxzxyxxyyzxzyyzxzzyxyyxyyzxzzzyyzyxyyxzyxzxyxyyxyyxyyzzxzyxzzyxxzxxzxyyyyxxyxxzzxxyyyyzyyxzzzxzyzyxzzyyzxxyzyyyyxzzyxxzyyyxxzzyyxzyzzyxxxxzxyzxzzxyyxzxxxxxxxzyxzxzzxzyyyzxxyyzyzzyzzyyzxyxzzzxyxxzxzyyyxxxxyzxzxzyxxzxzyzzxzxzyyzyzyyyzxyxyzyyxyxxxyyzyzyyxxyyxzyxxyzzyxxyzyxxzxzyyyxxyxxzxzzxxyxyyzyyxxxxyxzzxxyxzzyyyyxxzyyxxzyzyyzzyxxxyzzxyxyzxyyyzzxzyyzxxzxxyxxxzyzxxyyxzyyyyxxyzyxxyzxyxxyxzxzyyyyyzzxxyxyyxyzzzzxyyyxxxyxzxyyyzzzxzzyzyxyyyxzxzzzyyyyyzyzzyzxyzxxzyyzzzzyzzxxxzxyyzxxzxxzzyxzyxyzyzzxzyzxzxzzxxyzzyzzxyzyxyxxyxzzzyxxxzyzzyxxzzxyyxyxzzzzzzxzxyxzzxyyxzyyxyzyxzxyzxzyxyzyxxxzyyzzzzyzyxzxzxyyzzyzyzxyyzzzyyxyzzyzxyzyyzzxxxzyzyxzxzxyzyzyzxzxzyxxxyyyyzyzyyxzxxzzxzzzzzyxzzyyyyzyxxzzxzzyzzyxyzxzyxyyzzxxzzzyxyyxxyzzyzxyzzzxyzxyxzzxzyzyyxzxzxzzzzxxxxyyxyyxyyyxzzzxyzyzzyxxzzxzzyxxyyyyzzxyyyzzyzyzzzzzxzzxzzzyzyzzxyzzyxyxyzxxxyzyzyzyzxzyxyyzzyzzzxyzxxzzyyxzxxyxxyzyxzxzxyyzxyxxyzyxxyyyzyyzxyxzzxxxzxzyyyxxzxyzyzxyyzzzxzyxzzxxzyxzxzyxzxyxzxzzxxyzxxyyzxyzxxyyzzyzxzxyxzxxyyyzzzzzzyxxxxzzxzzxzyxzxzxyxyxzyyzyxxxzzzzzyxxyzzxyyzyzzyyzzyzxzyyxxzyyzyyzzyyyyzyxxxzxxxyyzxyyyzxzxxzyzzzxzxzyyyyyyxyxyxzxzxxxxxyyzzzyyxzzzyyxxyzxxxxzzzyyyzxzzzyxyzyzyzyxxxzxzyzzyxyzxyyyxzxxyzyxxyxzzxzyyyzxxyxyxyyzxzxyyyzyxyxxxxzzxxxyzxyzxzxxzxyzxxyyxxyyzzyzyzxxzzyzzzxzyzzyzyyxyxzxxxyyxyxzzxxxzzyxyyyyyzxzxxyxzxyyyxzzyyzzyyxzxyxyxzxxxyxxxzxzzzzxyxyyxxyxyxyxxzxyyyyxxxyzyxzyxxyzxxxxyzxyzyzxyyyxzyzzzxxxyyxxzyyzxxxxyzyxzyxzxxyzxyyxzyzxzyzxzzzxyyxzxyyxxzyxyxyyzzyxyzzzyxxzzzzzyxzzzzxxyxxyyyxyyzzxzxxzxzzzxxzxyyyxzyxyzyyzyzzxyxyxyyxxxyyxyxyxzzzyxzxzzxzyyxxzxyzyxzyzzzzyxxzzzxxyyyxyzzzxyzzxxyyxxzxxxxyyyyxzzzxxzyxzyxxxxyxyyyxzxxyzyxzxxzxxyyyzyzxyzzzxzxyxzyxxzxyxxxxzyyyzyzxxzxyzzyzxyzyzzyzxxxyyxyxzxyyxzyzxyxyxzxxyxzyzzzzzxxyzyzxzyzyxzxzxyxxyzxyzyzyxxxzzxzxxzxzzxzyxyyyxxxzyzyzzyyzzzyxzyyxyxyzzyxyzzyyxxxzyzyxyzxzzyyyyzzzzxyxyxxyyyzyyyxyxyyxyxxzyzzzyyzxxzxyzxzzzyyzxyyxzzyzyyyyyyxxyzyxyxyxxyxyxyxxxxzzzzzzyxzyyzxyzyyyyyyxyxxxyxzyyzxzyyxyyyyzyzxyzzzzzyxzxzzyxyyzzyyyzyxyyxzxyxzxyyyxyyxzxyxzzzxyyxyyzxyxyzxyxxxzxyzzxyyzzzyyzxxyyxyyzyyxxxyzzxyxxzxxyzzxzzyxxzyzxxxyzxyyzzxyxxyxzxxzxzzxxxxyxxzyyxyyyzxzyyyyyxyxzzyxzzzyyzxyyxyxxzzxyyzyyyzxzxxzxyxxxyyyyyxzyzxxyxzzxzyzxzxzyzxyyxxxyxyxyzzzyxzxxzxzzxyxyyzzzyzxzyyxxxyzzxxzxzzxxzyyyzyxxyyxyyxzzxzzzxxyxxyzzxyzxxzzyyzyyyyzzxzzzyzzzyxxyxyxyyzxzxyzzxxyxzyyyxyxxzzyyzzzxyzxyyxxxxxxzyzzyzyyzxzxyyzxyyxzyxzxxyzzxyyxyxzzxxyyyzyxzzzxyyxzxxyzxxyyyxzyyxzzxxxxzyzzyxyxyyxxyxxyzzxyzyyzxyzyzxyxyyzzxyzzyxxxxyzxxzzzxzyxyxxzxxxxzxxyzz");
// var stop = Date.now();
// console.log(stop - start);
