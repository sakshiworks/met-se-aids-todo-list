let createBtn=document.querySelector(".create-btn");
let popUp=document.querySelector(".d-none");
let saveBtn=document.querySelector(".button1");
let cancelBtn=document.querySelector(".button2");
let crossBtn=document.querySelector(".button3");
let signIn=document.querySelector(".button")

let fullname=document.querySelector(".namein");
let email=document.querySelector(".emailin");
let mobile=document.querySelector(".mobilein");
let selectId=document.querySelector("#nations");
let password=document.querySelector(".password1in");
let cpassword=document.querySelector(".cpassword1in");

let userin=document.querySelector(".userin");
let passwordin=document.querySelector(".passwordin");


//adding popup for user registration
createBtn.addEventListener("click",()=>{
    popUp.classList.remove("d-none");
});
//removing popup for user registration
cancelBtn.addEventListener("click",()=>{
    popUp.classList.add("d-none");
});
crossBtn.addEventListener("click",()=>{
    popUp.classList.add("d-none");
});
saveBtn.addEventListener("click",()=>{
    let newUser={
       fullname: fullname.value,
        email: email.value,
        mobile:mobile.value,
        selectId:selectId.value,
        password:password.value,
        cpassword:cpassword.value,       
    };
    let userList = localStorage.getItem("users"); // null;

    userList=userList===null ? []:JSON.parse(userList);
    let isUserExist=userList.find((value)=>
    {
        return value.email===newUser.email && value.mobile===newUser.mobile;
        
    });

if (isUserExist === undefined && newUser.email !== "") {
    userList.push(newUser);
    localStorage.setItem("users", JSON.stringify(userList));
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Registration successful,You can login now",
        showConfirmButton: false,
        timer: 2500
      });
    popUp.classList.add("d-none");
  } else {
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Given Email already registered,use different",
        showConfirmButton: false,
        timer: 1500
      });
  }
});

signIn.addEventListener("click", () => {
  let username = userin.value;
  let password = passwordin.value;

  let userList = localStorage.getItem("users"); // null;

  userList = userList === null ? [] : JSON.parse(userList);

  let isUserExist = userList.findIndex((value) => {
    return value.email === username && value.password === password;
  });

  if (isUserExist === -1) {
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "User not found, please try again",
        showConfirmButton: false,
        timer: 1500
      });
  } else {
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "login successful",
        showConfirmButton: false,
        timer: 1500
      });

    localStorage.setItem("login", isUserExist);
      window.location.replace("./menu.html");
}
});
let writeBtn=document.querySelector(".write-button");
writeBtn.addEventListener("click",()=>{
    Swal.fire({
        title: "Please Login in to write",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });

});


let feedBtn=document.querySelector("#feed");        
let aboutUsBtn=document.querySelector("#about-us");
let contactUsBtn=document.querySelector("#contact");
feedBtn.addEventListener("click",()=>{
    window.location.replace("./blogfeed.html");
});
aboutUsBtn.addEventListener("click",()=>{
    window.location.replace("./aboutus.html");
});
contactUsBtn.addEventListener("click",()=>{
    window.location.replace("./contactus.html");
});
