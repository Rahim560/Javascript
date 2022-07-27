// class PersonName {
//     constructor(fname, lname){
//         this.firstName = fname
//         this.lastname = lname
//     }
//     getPersonName (){
//         const details = `Frist Name: ${this.firstName} Last Name: ${this.lastname}`;
//         return details
//     }
// }
// const firstPerson = new PersonName ("King", "Khan")
// // console.log(firstPerson.getPersonName())
// // console.log(new Person ("john", "wick").getPersonName)
// class PersonContact extends PersonName{
//     constructor(email,phone){
//         super()
//         this.email = email;
//         this.phone = phone;

//     }
// }
// const firstPersonContact = new PersonContact ("wick","kick")
// console.log(firstPersonContact)


class PersonDetails {
    constructor(fname, lname,city){
        this.firstName = fname;
        this.lastName = lname;
        this.city = city
   }
   getPersonName(){
    const personName =`First Name: ${this.firstName} Last Name: ${this.lastName}`
       }
}
const personNameDetails = new PersonDetails("john", "Wick")
const personNameDetails2 = new PersonDetails("khan", "king")
// console.log(personNameDetails);
// console.log(personNameDetails2);

class PersonContact extends PersonDetails {
    constructor(email,phone, ...city){
        super(...city);//parent k constructor ko call kar raha hai new PersonDetails
this.email = email;
this.phone = phone;
    }
}
const personcontactDetails = new PersonContact("rahim",222,"abc@gm",1111, 5555)
console.log(personcontactDetails)


