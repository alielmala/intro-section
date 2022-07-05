let closeNav= document.getElementById("close-btn");
let navbar = document.getElementById("navbar");
let menu = document.getElementById("menu");
let features = document.getElementById("features");
let featuresList = document.getElementById("features-list");
let companies = document.getElementById("companies");
let companiesList = document.getElementById("companies-list");
//navbar open - close
closeNav.addEventListener("click",function(){
    navbar.classList.remove("expand-hr");
    featuresList.classList.remove("expand-vr");
    companiesList.classList.remove("expand-vr");
    document.getElementById("feature-arrow").classList.remove("rotate");
    document.getElementById("company-arrow").classList.remove("rotate");
});
menu.addEventListener("click", function(){
    navbar.classList.add("expand-hr");
})

//expand lists in navbar
features.addEventListener("click",function(){
    let classes = featuresList.className.split(" ");
    if (classes[1]=="expand-vr"){
        featuresList.classList.remove("expand-vr");
        document.getElementById("feature-arrow").classList.remove("rotate");

    }
    else{
        featuresList.classList.add("expand-vr");
        document.getElementById("feature-arrow").classList.add("rotate");
    }
});
companies.addEventListener("click",function(){
    let classes = companiesList.className.split(" ");
    if (classes[1]=="expand-vr"){
        companiesList.classList.remove("expand-vr");
        document.getElementById("company-arrow").classList.remove("rotate");
    }
    else{
        companiesList.classList.add("expand-vr");
        document.getElementById("company-arrow").classList.add("rotate");
    }
})