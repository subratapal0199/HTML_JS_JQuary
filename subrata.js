// let a;
// function getdata1() {
//     return "My function";               //asynchronous process
// }
// a = getdata1();
// console.log(a);

// function myfun(){
//     return a+b
// }

console.log("Asynchronous ways:")
let q = new Promise((resolve,reject)=>{
    resolve("Expected Data1");              
});
console.log(q);


let pro = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("unable......."));                
    },2000);
    
});
pro.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

var s1="@javascript indexof";
var n=s1.lastIndexOf("@");
document.write(n);




