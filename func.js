let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",function change(){
    document.getElementById("review").innerHTML = "You selected 1  out of 5"
})
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",function change(){
    document.getElementById("review").innerHTML = "You selected 2  out of 5"
})
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click",function change(){
    document.getElementById("review").innerHTML = "You selected 3  out of 5"
})
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click",function change(){
    document.getElementById("review").innerHTML = "You selected 4  out of 5"
})
let btn5= document.getElementById("btn5");
btn5.addEventListener("click",function change(){
    document.getElementById("review").innerHTML = "You selected 5  out of 5"
})
let Show = document.getElementById("Submit");
Show.addEventListener("click", function Show(){
    document.getElementById("thank-card").style.display = "block";
    document.getElementById("rate-content").style.display = "none";
})