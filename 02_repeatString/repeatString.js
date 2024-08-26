const repeatString = function(string, num) {
    let finalString =string;
    let i = 0;
   
   if (num === 0){
    finalString = '';
   }
   else if(num < 0){
    finalString = "ERROR";
   }
   else if(string == ''){
    finalString = '';
   }
   else{
    while(i < num -1){
        finalString += string;
        i++;
        }
    }   

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
