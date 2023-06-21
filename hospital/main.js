let menu = document.querySelector("ul");
let btn =document.getElementById("menu-bar");


btn.onclick =function(){
  btn.classList.toggle("fa-times");
 menu.classList.toggle("active")
};


// window.onscroll = function(){
//     btn.classList.remove("fa-times");
//     menu.classList.remove("active")
//   }
