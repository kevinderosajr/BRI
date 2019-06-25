

window.onscroll = function() {myFunction()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
console.log(sticky)

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  
    
  } else {
    navbar.classList.remove("sticky");
 
  }
  
}

AOS.init({
    duration: 1200,
  })

//Menu Navbar Code

// window.onscroll = function() {myFunction()};

// let navbar = document.getElementById("menuNavbar");
// let sticky = navbar.offsetTop;
// console.log(sticky)

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
  
    
//   } else {
//     navbar.classList.remove("sticky");
 
//   }
  
// }
