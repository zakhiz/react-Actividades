
let see = true;
const csFetch = (time,array)=>{
    return new Promise((resolve,reject) =>{
         setTimeout(() => {
              if(see){
                resolve(array)
              }else{
                reject('Error reading data')
              }
         }, time);
    })
}
    export default csFetch;