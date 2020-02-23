 // logic for side bar nav in mobile or tab view
 var icon_burger=document.querySelector(".icon-burger");
 var icon_burger_img=document.querySelector(".icon-burger-img");
 var side_nav=document.querySelector(".side-navigation");
 var isopen=false;//used to check wether the sidebar is open or not initially false means not open;
     icon_burger.addEventListener("click",function(e){
     if(!isopen){
         side_nav.style.left="0px";
         isopen=!isopen;
         icon_burger_img.setAttribute("src","./images/close-icon.png")    
     }
     else{
         side_nav.style.left="-200px";
         isopen=!isopen;
         icon_burger_img.setAttribute("src","./images/burger.png")
     } 
 });

 //initialising a video popup 
 $(document).ready(function(){
     $('.venobox').venobox(); 
 });

 // customisition for video popup
 $('.venobox_custom').venobox({
     framewidth: '400px',        
     frameheight: '300px',       
     titleattr: 'data-title',    
     numeratio: true,            
     infinigall: true           
 });