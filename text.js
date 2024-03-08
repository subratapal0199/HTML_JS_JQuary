//Converting JSON Object to String and String to JSON Object

const employee= {
    "firstname": "Rick",
    "lastname": "Brown",
    "age": 22,
    "salary": 15000
    };
var string = JSON.stringify(employee);
console.log(string);  
console.log(typeof string);
 
const employeeList= [{
    "firstname": "Rick",
    "lastname": "Brown",
    "age": 22,
    "salary": 15000
    },
    {
    "firstname": "Rick",
    "lastname": "Brown",
    "age": 22,
    "salary": 15000
    }
    ];    

var string = JSON.stringify(employeeList);
console.log(string);  

//Converting JSON Object to String and String to JSON Object
var employee1= '{"firstname": "Rick", "lastname": "Brown", "age": 22, "salary": 15000}';
var object = JSON.parse(employee1);
console.log("Simple way to display:")
console.log(object);


    

