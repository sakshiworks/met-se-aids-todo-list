let login = localStorage.getItem("login");
let userDetails = null;
if (login === null) {
  window.location.replace("/login.html");
} else {
  userDetails = localStorage.getItem("users");
  userDetails = JSON.parse(userDetails);
  userDetails = userDetails[login];
  document.querySelector(".head-name").innerHTML = `Welcome, <b>${userDetails.fullname}</b>`;
};
let logoutbtn=document.querySelector(".logout-button");
let feedbtn=document.querySelector("#feed");
let aboutusbtn=document.querySelector("#about-us");
let contactus=document.querySelector("#contact");
logoutbtn.addEventListener("click",()=>
{
    Swal.fire({
        title: "Are you sure to logout?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Log-out successful");
          window.location.replace("./login.html")
        } else if (result.isDenied) {
        }
      });
});
feedbtn.addEventListener("click",()=>{
    window.location.replace("./blogfeed.html")
});
aboutusbtn.addEventListener("click",()=>{
    window.location.replace("./aboutus.html")
});
contactus.addEventListener("click",()=>{
    window.location.replace("./contactus.html")
});


console.log(userDetails);
let title = document.querySelector(".input-title");
let description = document.querySelector(".input-blog");
let url = document.querySelector("#url");
let saveBlogBtn = document.querySelector(".save-button");

saveBlogBtn.addEventListener("click", () => {
  let newBlog = {
    title: title.value,
    description: description.value,
    url: url.value,
    id: login,
    author: userDetails.fullname,
  };
  let blogs = localStorage.getItem("blogs"); // null;
  blogs = blogs === null ? [] : JSON.parse(blogs);

  blogs.unshift(newBlog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  alert("Blog Saved Successfully");
  console.log(blogs);
});
