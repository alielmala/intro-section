let closeNav= document.getElementById("close-btn");
let navbar = document.getElementById("navbar");
let menu = document.getElementById("menu");

closeNav.addEventListener("click",function(){
    navbar.classList.remove("expand-hr");
    document.getElementById("features-list").classList.remove("expand-vr");
    document.getElementById("companies-list").classList.remove("expand-vr");
    document.getElementById("feature-arrow").classList.remove("rotate");
    document.getElementById("company-arrow").classList.remove("rotate"); 
    countComp++;   
    countFeat++;
})
menu.addEventListener("click", function(){
    navbar.classList.add("expand-hr");
})
let countFeat =0, countComp=0;
document.getElementById("features").addEventListener("click",function(){
        if (countFeat%2==0){
            document.getElementById("features-list").classList.add("expand-vr");
            document.getElementById("feature-arrow").classList.add("rotate");
            countFeat++;
        }
        else{
            document.getElementById("features-list").classList.remove("expand-vr");
            document.getElementById("feature-arrow").classList.remove("rotate");
            countFeat++;
        }
        
})
document.getElementById("companies").addEventListener("click",function(){
    if (countComp%2==0){
        document.getElementById("companies-list").classList.add("expand-vr");
        document.getElementById("company-arrow").classList.add("rotate");
        countComp++;
    }
    else{
        document.getElementById("companies-list").classList.remove("expand-vr");
        document.getElementById("company-arrow").classList.remove("rotate");
        countComp++;
    }
})