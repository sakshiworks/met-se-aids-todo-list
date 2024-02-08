let blogs = localStorage.getItem("blogs");
blogs = JSON.parse(blogs);
console.log(blogs);
let blogList = document.querySelector(".blog-list");
let list = blogs.map((value) => {
  return `
  <section class="write-surface">
  <section class="write-content">
      <section>
          <p class="input-title">${value.title}</p>
      </section>
      <section >
          <p class="input-blog">${value.description}</p>
      </section>
      <section >
         <p class="author">${value.author}</p>
      </section>
  </section>
  <section class="write-img">
      <img src="${value.url}" alt="">
  </section>
</section>
    `;
});

blogList.innerHTML = list.join("");

let Writebtn=document.querySelector("#write-button");
Writebtn.addEventListener("click",()=>{
    window.location.replace("./login.html");
});
  
let aboutUsBtn=document.querySelector("#about-us");
let contactUsBtn=document.querySelector("#contact");

aboutUsBtn.addEventListener("click",()=>{
    window.location.replace("./aboutus.html");
});
contactUsBtn.addEventListener("click",()=>{
    window.location.replace("./contactus.html");
});