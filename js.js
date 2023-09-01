//for hand burger Bar
 function myFunction(x) {
    x.classList.toggle("change");
}
// for Slide over 
document.addEventListener('DOMContentLoaded',()=>{
    const container=document.querySelector('.container');
    const barslide=document.querySelector('.barslide');
    const baroverlay = document.querySelector('.bar-overlay');
    
container.addEventListener('click',()=>{
    barslide.classList.add('open');
});

baroverlay.addEventListener('click',()=>{
    barslide.classList.remove('open');
    container.classList.toggle("change");
    
});

});

// for slide show
const slideshow = document.querySelector('.slideshow')
const sbtn = document.querySelectorAll('.sbtn-l, .sbtn-r')
const simg =["slide1","slide2","slide3","slide4","slide5"]

let index=0
sbtn.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('sbtn-l')){
            index--;
            if(index<0){ 
                index=simg.length-1;
            }
            slideshow.style.background =`url("/image/${simg[index]}.jpeg") center/cover no-repeat`
        }
        else{
                index++;
                if(index===simg.length){ 
                    index=0;
                }
                slideshow.style.background=`url("/image/${simg[index]}.jpeg") center/cover no-repeat`
        }
            
    });

});

// for login 
 function form(){
    var username=document.forms["loginform"]["username"].value;
    var userpass=document.forms["loginform"]["userpass"].value;
    
    if(username==null || username==""){
        document.getElementById("errorbox").innerHTML="Enter The User name";
        return false;
    }
    if(userpass==null || userpass==""){
        document.getElementById("errorbox").innerHTML="Enter The Password";
        return false;
    }
    if(username!=''&& userpass!=''){
        alert("Login Successfully");
    }
 }

 //for register
 function rform(){
    var username=document.forms["regform"]["username"].value;
    var mail=document.forms["regform"]["mail"].value;
    var userpass=document.forms["regform"]["userpass"].value;
    var userpass2=document.forms["regform"]["userpass2"].value;
    
    if(username==null || username==""){
        document.getElementById("errorbox").innerHTML="Enter The User name";
        return false;
    }
    if(mail==null || mail==""){
        document.getElementById("errorbox").innerHTML="Enter The Mail Id";
        return false;
    }
    if(userpass==null || userpass==""){
        document.getElementById("errorbox").innerHTML="Enter The Password";
        return false;
    }
    if(userpass2==null || userpass2==""){
        document.getElementById("errorbox").innerHTML="Enter The Password";
        return false;
    }
    if(userpass2 != userpass){
        document.getElementById("errorbox").innerHTML="Password Not Match";
        return false;
    }
    if(username!=''&& mail!=''&& userpass!='' && userpass2!=''){
        alert("Register Successfully");
    }
 }


  