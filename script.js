const formOpenBtn=document.querySelector("#form-open"),
home=document.querySelector(".sec"),
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
$(document).ready(function(){
    var cartCountValue=0;
    var cartCount=$('.cart .count');
    $(cartCount).text(cartCountValue);

    $('.btn').on('click',function(){
        var cartBtn=this;
        var cartCountPositon=$(cartCount).offset();
        var btnPositon=$(this).offset();
        var leftPos=cartCountPositon.left<btnPositon.left? btnPositon.left-(btnPositon.left-cartCountPositon):cartCountPositon.left;

        var topPos=cartCountPositon<btnPositon.top? cartCountPositon.top:cartCountPositon.top;
        $(cartBtn).append("<span class='count'>1</span");
        $(cartBtn).find(".count").each(function(i,count){
            $(count).offset({
                left:leftPos,
                top:topPos
            })
            .animate(
                {
                    opcity:0
                },
                800,
                function(){
                    $(this).remove();
                    cartCountValue++;
                    $(cartCount).text(cartCountValue);
                }
            );
        });
    });
})

