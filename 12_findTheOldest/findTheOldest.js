const findTheOldest = function(arr) {
    let sorti = arr.sort((a,b)=>{
        if(a.yearOfDeath == undefined ){
          a.yearOfDeath = new Date().getFullYear();
        }
        if(b.yearOfDeath == undefined){
          b.yearOfDeath = new Date().getFullYear();  
        }
      let first = a.yearOfDeath - a.yearOfBirth;
      let second = b.yearOfDeath - b.yearOfBirth;
  
    if(first<second){
      return 1;
    }
    if(first===second){
      return 0;
    }
    else{
      return -1;
    }
  
    })
    return sorti[0];
  };

// Do not edit below this line
module.exports = findTheOldest;
