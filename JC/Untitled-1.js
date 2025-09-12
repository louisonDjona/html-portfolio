document.getElementById("year").textContent=newDate().getFullYear();
const nav=document.querySelector(".navbar ul");
const menuBtn=document.createElement("div");
menuBtn.classList.add("menu-btn");
menuBtn.innerHTML="&#9776;";
document.querySelector("header").prepend(menuBtn);
menuBtn.addEventListener("click",()=>{
    nav.classList.toggle("show");
});
const style=document.createElement("style");
style.textContent=`
    @media(max-width: 768px){
        navbar ul{
           display: none;
           flex-direction: column;
           background: #111;
           padding: 1rem;
        }
        .navbar ul.show{
           display: flex;
        }
        .menu-btn{
           font-size: 1.8rem;
           cursor: pointer;
           color: #fff;
        }
    }
`;
document.head.appendChild(style);
const menuToggle=document.querySelector(".menu-toggle");
const navMenu=document.querySelector(".navbar ul");
menuToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("show");
});
