// function factFun(radius){
//     return {
//         radius: radius,
//         getCircleArea(){
//             //function key word
//             //key name - to avoid having a key value pair
//             return 3.14 *radius *radius
//         }
//     }
    
// }
// const result = factFun(15)
// console.log(result)
function person(lastName,city){
    return {
        firstName : "John",
        lastName, // lastName : arguments value
        getFullName(){
            return ` First Name: ${this.firstName} his Last Name  is : ${this.lastName} `
        },
        getAddress(){
            return `Address: ${this.city}`
        }
    }
}
function person2(){
    firstName : "King"
}
const johnWick = person("Wick")
const johnKhan = person("Khan")
const johnWilson = person("Wilson", "Nanded");
// console.log(johnWilson.getAddress())

function GetPersonDetails(fname, lname, city){
    this.firstName = fname
    this.lastName = lname
    this.city = city
    this.getPersonInfo = function(){
        return `First Name: ${this.firstName} | Last Name: ${this.lastName} | City: ${this.city}`
    }
}
const newPerson = new GetPersonDetails("john", "khan", "nanded")
// console.log(new GetPersonDetails("john", "khan", "nanded"))
console.log(newPerson.getPersonInfo())
