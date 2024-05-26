// here am going to use the concept of inheritence where class inherit properties and method from parent class 

class Base{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hey am talking my name is ${this.name}`)
    }
}

// now making new class which inherit the properties from parent class 

class student extends Base{
    constructor(name,age){
        super(name,age);
    }
}

let tim=new student("Taimourjutt",24);
console.log(tim);