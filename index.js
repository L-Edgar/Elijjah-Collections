const formOpenBtn=document.querySelector("#form-open"),
home=document.querySelector(".home"),
formContainer=document.querySelector(".form-container"),
formCloseBtn=document.querySelectorAll(".form_close"),
signUpBtn=document.querySelector("#signup"),
loginBtn=document.querySelector("#login"),
pwShowHide=document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click",()=>home.classList.add("show"));
formCloseBtn.addEventListener("click",()=>home.classList.remove("show"));

pwShowHide.forEach(icon=>{
    icon.addEventListener("click",()=>{
        let getPwInput=icon.parentElement.querySelector("input");
        console.log(getPwInput);
    })
})
