/* ==========================================================
   Fade-in Animation
========================================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.15

});

document.querySelectorAll("section,.card").forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});

/* ==========================================================
   Scroll To Top Button
========================================================== */

const topButton = document.createElement("button");

topButton.innerHTML="▲";

topButton.id="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/* ==========================================================
   Current Year
========================================================== */

document.querySelector("footer p:last-child").innerHTML=

"© "+new Date().getFullYear();
