
const navbar = document.querySelector('.box-menu'); 
const headerbox = document.querySelector('.header-box');  
const xclose = document.querySelector('.xclose');

document.querySelector('#hamburger').onclick = () => {
    navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    navbar.classList.remove('active');
}

const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbar.contains(e.target)){
        navbar.classList.remove('active');
        headerbox.classList.toggle('blur'); 
    } 
})


// window.onscroll = function() {myFunction()};

// var widget = document.getElementById('header');
// var sticky = widget.offsetTop;

// function myFunction(){
//     if (window.pageYOffset >= sticky){
//         widget.classList.add("sticky");
//         console.log(widget);
//     }else{
//         widget.classList.remove("sticky");
//     }
// }


var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("banner-image").classList.add("show");
    }else{
        document.getElementById("banner-image").classList.remove("show");
    }
    prevScrollpos = currentScrollPos;
}