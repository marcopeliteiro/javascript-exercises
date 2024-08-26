const sumAll = function(a,b) {
let sum;

    if((a<0) || (b<0) || (Number.isInteger(a) !== true) || (Number.isInteger(b) !== true)){
        sum = "ERROR";
    }
    else{
        sum = 0;
        if(a < b){
            for(a; a<=b; a++){
                sum += a;
            }
        }
        else if(a > b){
            for(b; b<=a; b++){
                sum += b;
            }
        }
        else{
            sum = a;
        }
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
