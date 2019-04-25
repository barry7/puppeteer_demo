function test(n){
    if (n===1||n===2){
        return 1;
    } else{
        return test(n-1)+test(n-2)
    }
}
// console.log(test(40))

function plus(n){
    if(n===0){
        return 0;
    }else{
        return 1+plus(n-1)
    }
}
console.log(plus(99999))
