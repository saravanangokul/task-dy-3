// //qus1:-
// //how to compare two JSON have the same properties without order?

let ob1={name:"person 1",age:5};
let obj2={age:5,name:"person 1"};
let JSON1=JSON.stringify(ob1);
let JSON2=JSON.stringify(obj2);
if(JSON1===JSON2){
    console.log("true");
}
else{
    console.log("false");
}
// qus:-2
// use the rest countries' APL URL->https://restcountries.com/v3.1/all and the display all the country flags in the console 

var b = new XMLHttpRequest();
b.open("GET","https://restcountries.com/v3.1/all",true)
b.send();
b.onload = function(){
    var data = b.response;
    //console.log(data);
    var result = JSON.parse(data);
    //console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flag);
    }
}


 //  qus:-3
 //  use the same rest countries and prin all countries names, regions, sub-region and populations


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var a = request.response;
    //console.log(data);
    var result1= JSON.parse(a);
    //console.log(result);
    for(var i=0;i<result1.length;i++){
        console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population);
    } 
}