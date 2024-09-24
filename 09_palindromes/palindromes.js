const palindromes = function (str) {

    let split = str.replace(/[^A-Za-z0-9\s]/g,"").toLowerCase().split("");
    let reverse = split.toReversed();
    let join = reverse.join("");
    let strJoin = split.join("");
    
    let joinedOne = join.split(" ").join("");
    let joinedTwo = strJoin.split(" ").join("");

    if(joinedOne === joinedTwo){
        return true;
    }
    else{
        return false;
    }

};




// Do not edit below this line
module.exports = palindromes;
