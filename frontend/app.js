const student1 = {
    nam: "taimour",
    age: 23,
    location: "sammundri",
    local: () => {
        console.log("stay here in local format");
    }
}

// now consider prototype for javascript ooop function 

// prototype is build in every object where they ingerit methods from 

// now make second object where i will inherit the function from student1 object 


const student2 = {
    nam: "lakhan",
    age: 34,
    location:"lahore"

}
student2._proto_=student1;



let ok=student2.local;
console.log(ok);