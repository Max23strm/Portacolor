
//variables
var boton=document.getElementById("boton");
var contacto=document.getElementById("contacto");
var botonForma= document.getElementById("btn-form")
var tl=gsap.timeline();

//gsap

gsap.from(".cuadro",{scrollTrigger:{trigger:".cuadro",
toggleActions:"restart none none none"}, y:50, duration:3, opacity:0})

gsap.from("#ejemplos",{scrollTrigger:{trigger:"#ejemplos",
toggleActions:"restart none none none"}, x:500, duration:3, opacity:1})

tl.from("#patron",{ x:-100, opacity: .3, duration: 1.3})
.from("#comp",{y: 50, duration:2, opacity:0});



//script
boton.onclick=function(){
    if(contacto.style.display=="none"){
    contacto.style.display="block";
} else{
        contacto.style.display="none";
}}
botonForma.onclick=function(){
    contacto.style.display="none";
}


//-------jquery

$(document).ready(function(e){
$('#boton').on('mouseenter',function(e){
    x=e.pageX - $(this).offset().left;
    y=e.pageY - $(this).offset().top;
    $(this).find('span').css({top:y, left:x})
})
$('#boton').on('mouseout',function(e){
    x=e.pageX - $(this).offset().left;
    y=e.pageY - $(this).offset().top;
    $(this).find('span').css({top:y, left:x})
})
})