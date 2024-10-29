const adilson = {
    firstName:"Adilson",
    lastName: "varela",
    nickName:"da",
    age:2,
    fullName: function(){
        return this.firstName + "" + this.lastName;
    },

 getAge: function() {
    return this.age;
 },
 showName(templete) {
    console.log(temple + " " + this.firstName);
 },

 getName() {
    return this.name;
}
}
adilson.age = 12 
adilson.nickName ="Ana"
console.log(adilson.nickName);
console.log(adilson.age);
console.log(adilson.address);

adilson.address = "santiago"
console.log(adilson.address);

console.log(adilson.getAge());
console.log(adilson.getName());
console.log(adilson.fullName());
(adilson.showName("sou"));

function person(firstName, lastName) {
    this.firstName =firstName;
    this.lastName =lastName;
}

 function Course(){
    this.name ="" ;
 }
  person("vania","sou")
  
console.log( " Fora da funacao",this);
console.log( " Fora da funacao",this.firstName);

class people{
    constructor(name) {
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
 const danielson = new people("Danielson");
 console.log(Danielson.getName ());
 danielson.setName("Denis")


