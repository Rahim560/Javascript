const person = {
    firstName:"Abdul",
    getFullName: function (LastName, City){
        return this.firstName +` ${LastName}, he is from ${City}`
    }

}
const perosn2 = {
    firstName : "rahim"
}
console.log(person.getFullName.call(perosn2,"khan","king"))
console.log(person.getFullName.apply(perosn2,["khan","king"]))
console.log(person.getFullName.bind(perosn2,"khan","king")())