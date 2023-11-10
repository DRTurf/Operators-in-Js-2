function check(num){
    let ans=(num>0)?"positive":((num==0)?"zero":"negetive");
    return ans;
}

console.log(`The number is ${check(0)}`);