
function add(){
var addvalue=document.getElementById("changevalue");
var price=document.getElementById("price");

if(addvalue.value>=0){
addvalue.value=parseInt(addvalue.value)+1;
price.innerHTML=parseFloat(price.innerHTML)+1299;
}
else{
    price.value=1299;
}
}
function sub(){
    var subvalue=document.getElementById("changevalue");
    var num=1299;
    
    if(subvalue.value<=0){
        subvalue.value=0;
    }
    else{
    subvalue.value=parseInt(subvalue.value)-1;
    var price=document.getElementById("price")
    price.innerHTML=parseFloat(price.innerHTML)-num;
    }

}
const addsan=()=>{
var addvalue=document.getElementById("valuechange");
var price=document.getElementById("newprice");

if(addvalue.value>=0){
addvalue.value=parseInt(addvalue.value)+1;
price.innerHTML=parseFloat(price.innerHTML)+1199;
}
}
const subsan=()=>{
    var subvalue=document.getElementById("valuechange");
    var num=1199;
    
    if(subvalue.value<=0){
        subvalue.value=0;
    }
    else{
    subvalue.value=parseInt(subvalue.value)-1;
    var price=document.getElementById("newprice")
    price.innerHTML=parseFloat(price.innerHTML)-num;
    }



}
const back=()=>{
    location.replace("http://127.0.0.1:5500/index.html")
}