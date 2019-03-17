'use strict';
const buttonElems = document.querySelectorAll(".question-container button");
const introElem = document.querySelectorAll(".question-container")[0];


window.onload = function(){
    introElem.style.opacity = 1;

}

buttonElems.forEach(function(buttonElem) {
    buttonElem.addEventListener("click", function() {
        const travel = this.dataset.travel;
        // window.location.href = "#" + travel;
        document.getElementById(travel).scrollIntoView({behavior: "smooth"});
        if(travel === "end"){
            setBodyScrollable();
        }
    });
});

function setBodyScrollable(){
    document.querySelector("body").classList.add("scrollable");
}