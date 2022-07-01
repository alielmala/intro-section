let closeNav= document.getElementById("close-btn");
let navbar = document.getElementById("navbar");
let menu = document.getElementById("menu");

closeNav.addEventListener("click",function(){
    navbar.classList.remove("expand-hr");
})
menu.addEventListener("click", function(){
    navbar.classList.add("expand-hr");
})

document.getElementById("features").addEventListener("click",function(){
    document.getElementById("features-list").classList.add("expand-vr");
})
document.getElementById("companies").addEventListener("click",function(){
    document.getElementById("companies-list").classList.add("expand-vr");
})