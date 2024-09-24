const fibonacci = function(a) {
    let seq =[1,1];
    let i=2;
    let b = Number(a);
    if(b===0){
      return 0;
    }
    if(b<0){
      return 'OOPS';
    }
    else{
    for(i; i<b;i++){
        seq[i] = seq[i-1] + seq[i-2];
    }
    }
    return seq[b-1];
};


// Do not edit below this line
module.exports = fibonacci;
