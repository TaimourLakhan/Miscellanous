// here am going to make the factory function that can make any person object but the drawback is the memory use it every new object contain its own memory 

function PersonMaker(name,age){
    let person={
        name:name,
        age:age,
        talk:()=>{
            console.log(`hey my name is ${this.name}`);

        }
    }

    return person;
}

let p1=PersonMaker("taimour",23);
console.log(p1);
console.log(p1.talk);

// factory function is not the good practice for making the new object in js it contain too many memory 

// factory function is replaced by new method let see 

// making constructor have start with capital letter and return nothing 

function Person(loc,stat){
    this.loc=loc;
    this.stat=stat;
}

Person.prototype.talk=()=>{
    console.log(`hey my name is taimour am i live in ${loc}`);
}

// now making the new object using new method it is most efficient method to make new object empty that can use its prototype properties and methods every new object make from prototypr cannot take up new memory for these properties 

let p11=new Person("sammundri","engaged");

console.log(p11.loc);
// console.log(p11.talk);
p11.talk;

class Person1{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    talk(){
        console.log(`hey my name is ${this.name}`);
    }
}

// making new object from class classs is the template of making the new object 

let p111=new Person1("TaimourLakhan",23);

console.log(p111.name);
console.log(p111);


