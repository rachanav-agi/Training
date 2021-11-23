const person ={
    firstName:"Rachana",
    LastName:"V",
    weight:66,
    height:6
};
const{firstName,height}=person;
console.log(`my name is ${firstName} and height is ${height}`);

const add=(...args)=>{
    let result=0;
    for(let arg of args)result +=arg;
    return console.log(result);
};
add(2,4)

const one=[1,2,3]
const two=[...one,4,5,6];
console.log(two);


