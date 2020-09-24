function add(){
var a,b,c;
a=Number(document.getElementById("first").value);
b=Number(document.getElementById("second").value);
c= a + b;
document.getElementById("answer").value= c;
}
function sub(){
var a,b,d;
a=Number(document.getElementById("first").value);
b=Number(document.getElementById("second").value);
d= a - b;
document.getElementById("answer").value= d;
}
function div(){
var a,b,e;
a=Number(document.getElementById("first").value);
b=Number(document.getElementById("second").value);
e= a / b;
document.getElementById("answer").value=e;
}
function mul(){
var a,b,f;
a=Number(document.getElementById("first").value);
b=Number(document.getElementById("second").value);
f= a * b;
document.getElementById("answer").value=f;
}
function mod(){
var a,b,g;
a=Number(document.getElementById("first").value);
b=Number(document.getElementById("second").value);
g= a % b;
document.getElementById("answer").value=g;
}
