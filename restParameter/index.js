// //Rest parameter

// // A rest parameter aloows funcation to accept idefinite parameter and store in an array.
// //it must be in the last.
// // It introduced in ES6.



// const restparameter = (a, b, ...king)=>{
//    console.log(king);
//    console.log(king[4]);
   
  
// };
// restparameter(10,20,30,40,50,60,70)


// //=====================================

// //Template Literal 
// //back tick`

// const templateliteral = (name, age ) => {
// // console.log("this"+" "+"is"+name+" "+age+" ");
// console.log(`This  \n is ${name} ${age} year old `)
// }
// templateliteral("Rahim",30);
// templateliteral("Abdul",30);
// templateliteral("Afroz",32);
// templateliteral("king",32);

// const arrone = [1,2,3]
// const arrtwo = [ 3,2,1]
// // const a = [arrone + arrtwo]
// // console.log(a + "====>")
// // console.log(...arrone , ...arrtwo)
// const newArr  = [...arrone,...arrtwo]

// console.log(newArr)
// const objOne = {name: "john", age: 25}
// const objTwo = {contact: 814999883, address: "Nanded"}
// const newObj = {city:"Nanded",...objOne, ...objTwo, }
// console.log(newObj)
// const a = ["a", "b", "c"]
// const b = [ {N} 1,2,3]
// const c = [...a, ...b]
// const e = 
// console.log(e)