//Rest parameter

// A rest parameter aloows funcation to accept idefinite parameter and store in an array.
//it must be in the last.
// It introduced in ES6.



const restparameter = (a, b, ...king)=>{
   console.log(king);
   console.log(king[4]);
   
  
};
restparameter(10,20,30,40,50,60,70)


//=====================================

//Template Literal 
//back tick`

const templateliteral = (name, age ) => {
// console.log("this"+" "+"is"+name+" "+age+" ");
console.log(`This  \n is ${name} ${age} year old `)
}
templateliteral("Rahim",30);
templateliteral("Abdul",30);
templateliteral("Afroz",32);
templateliteral("king",32);


