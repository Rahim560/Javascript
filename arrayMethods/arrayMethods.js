const king = ["a", "b", "ing","c", "d", "e","i", "f", "g", "h", "i"];
// console.log(king.pop());
// console.log(king.push("a"));
// console.log(king.shift());
// console.log(king.unshift("a"));
// console.log(king.find((items)=>items ==="ing"));
// console.log(king.findIndex((items)=>items ==="z"));
// console.log(king.includes("a"));
// console.log(king);
// console.log(king.indexOf("ing"));
// console.log(king.some((naam) => naam === "ing"));
// console.log(king.every((naam) => naam % 2 === 0));
// console.log(king.every((naam) => naam > 10));
// console.log(king.slice(5,10));
// console.log(king.splice(5,1, 500, 500 ),king);
// console.log(king.filter((item)=> item === "i"));
//filter mai sab ek jasie elements ko ek jagha la k deta hai..
const product = [
{c:"king", size: 7, color: "black", brand: "KGF1",Price:3000, id:1 },
{c:"king", size: 7, color: "white", brand: "kGF1",Price:4000,  id:2},
{c:"king", size: 8, color: "white", brand: "KGF2",Price:5000, id:3 },
{c:"chotaDon", size: 9,  color: "orange", brand: "kGF3",Price:5000, id:4 },
{c:"king", size: 10, color: "red",  brand: "KGF4",Price:4000, id:5 }
]

const mapped = product.map((element)=>{
    if(element.Price <= 4000){
        return {...element, delivery: "31/02/03"}
    } else {
        return {...element, delivery: "01/07/2022" }
    }
})
console.log(mapped)

// console.log(product.filter((item)=> item.brand === "KGF4"))
// console.log(product.filter((item)=>item.id !== 5))
// console.log(product.map((item)=> item.size + 0.5 ))
// console.log(product.map((item)=> item.c + "Shoes" ))
// console.log(product)
                                                                 
// const arr1 = ["a", "b"]
// const arr2 = ["c", "d"]
// console.log(arr1.concat(arr2))
// console.log(product.sort((a,b)=> a.Price.toString() > a.Price.toString() ? -1: 1))

// const output = product.reduce((a, b)=>
//      a + b.Price*2,0);
// console.log(output)
// const k = "abcdef"
// console.log(Array.from(k))


// const num = [1,2,3,4,5,6]
// console.log(num.fill("abc"))
// console.log(num.fill("ABC", 3,5))
// console.log(num.join(),num)
// console.log(Array.isArray(num))
// console.log(num.toString())
// console.log(num.forEach((item,index)=>console.log(` {$index} {$item} `)))
// const num = [1,2,3,4,5,6,8,9,13,15,20]
// const output = num.filter((ja)=>ja >=8).map((ja)=>ja *2).reduce((acc, ja)=>acc + ja, 0 )
// console.log(output)

