let stepSize= 7;
let result= "";
for(let i=1; i< stepSize; i++){
    for(let j=1; j< stepSize; j++){
        if(i + j >= stepSize){
        result = result.concat('#');
        }else{
            result= result.concat(' ');   
        }
    }
    result= result.concat("\n");
}
console.log(result);
