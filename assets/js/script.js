/* Author: 

*/

// hamburger menu
var menu_state=0;
var hamburger =$(".menu-bar");
hamburger.on("click",toggleMobileMenu);
var navbar=$(".navbar");
var toggle_btn = $(".toggle-btn");
var toggle = $(".toggle");
var down_arrow = $(".hide-menu-item:nth-of-type(4)::after");
toggle_btn.on({
    mouseenter: function() {
        toggle.removeClass( "inactive" );
      }, mouseleave: function() {
        toggle.addClass( "inactive" );
        down_arrow.removeClass("inactive");
      }
});

var all_menu_items = $(".navbar li");
function toggleMobileMenu(e) {
    console.log("menu state ="+menu_state);
  if(menu_state===0) {
    navbar.addClass("hamburger-menu");
    
    all_menu_items.each(function(){
        if($(this).hasClass("hide-menu-item"))
        {
            $(this).removeClass("hide-menu-item");
          }
      });
      
      menu_state=1;
  }
  else if(menu_state===1) {
      navbar.removeClass("hamburger-menu");
      var all_menu_items_recent = $(".navbar li");
              all_menu_items_recent.each(function(){
                  if(!$(this).hasClass("hide-menu-item"))
                  {
                      $(this).addClass("hide-menu-item");
                  }
              });
              hamburger.removeClass("hide-menu-item");
              menu_state=0;
              
          }        
      }


// counter 
$(document).ready(function() {
    var counter1 = $(".counter1");
    var counter2 = $(".counter2");
    var counter3 = $(".counter3");
    var counter4 = $(".counter4");
    var max1 = 2260,max2=210,max3=887,max4=1920;
   
    function start_counter1() {
         var current1 = parseInt(counter1.html());
         if (current1< max1) {
            counter1.text(current1+1);
            setInterval(start_counter1,10);
          current1++; 
        }
    }  

    function start_counter2() {
       var current2 = parseInt(counter2.html());
       if (current2< max2) {
          counter2.text(current2+1);
          setInterval(start_counter2,1);
        current2++; 
       }
    }  

    function start_counter3() {
        var current3 = parseInt(counter3.html());
        if (current3< max3) {
        counter3.text(current3+1);
        setInterval(start_counter3,5);
        current3++; 
    }
    }  

    function start_counter4() {
        var current4 = parseInt(counter4.html());
        if (current4< max4) {
        counter4.text(current4+1);
        setInterval(start_counter4,5);
        current4++; 
    }
    }  



  start_counter1();    
  start_counter2();    
  start_counter3();    
  start_counter4();   
  
  


  

});

























