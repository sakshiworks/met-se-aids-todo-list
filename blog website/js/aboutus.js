let Writebtn=document.querySelector(".write-button");
Writebtn.addEventListener("click",()=>{
    window.location.replace("./login.html");
});
let feedbtn=document.querySelector("#feed");
let contactus=document.querySelector("#contact");


feedbtn.addEventListener("click",()=>{
    window.location.replace("./blogfeed.html")
});
contactus.addEventListener("click",()=>{
    window.location.replace("./contactus.html")
});