let arr = [2,5,7,9,4,6,0];
let target = 10;
function findElement(arr,target){
    for(i = 0; i < arr.length-1; i++) {
        for(j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == target) {
                return [arr[i],arr[j]];
            }
        }
    }
    return [];
}

let output = findElement(arr,target);
for(k = 0; k < output.length; k++){
    console.log(output[k]);
}
//Expected output [6,4]