function generateNumber(n){
    let arr=[];
    for (let i = 0; i < n; i++) {
       arr[i]=Math.floor(Math.random()*10);
        
    }
    return arr;
}


function sum(arr){
    let ans = 0;
    for (let i = 0; i < 3; i++) {
       ans+= arr[i];
         
     }

     return ans;
}
export {generateNumber,sum}; 