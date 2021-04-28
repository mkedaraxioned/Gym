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
  
  
// form validation 1

var form = $(".contact-form");
form.on('submit', validateForm);
var form_ip=$('.form-ip');
var inputs=['fname','lname','subject','email','message'];
var persons= {};
var emailerr;
var re_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
form_ip.each(function(){
    $(this).on("input",validateField);
});

function validateField() {
    var input_data = $(this).val();
    console.log("this inp="+input_data);
    var data_attr=$(this).attr("data-attr");
    console.log("data attr "+data_attr);
    if(data_attr=="email")
    {
        var is_email=re_email.test(input_data);
        var err_class='.'+data_attr+'-error';
        var err_span=$(err_class);
        if(!is_email) {
            err_span.html("Please enter "+data_attr); //ch1
            err_span.addClass('show-element');
            $(this).addClass('outline-red');
            emailerr=1;                  
         }
        else {
            emailerr=0;

             if(err_span.hasClass('show-element'))
            {
              err_span.removeClass('show-element');
              err_span.addClass('hide-element');                  
            }
            if($(this).hasClass("outline-red"))
            {
                $(this).removeClass("outline-red");
            }

        }
    }

    if(input_data=="")
    {
        var err_class='.'+data_attr+'-error';
        var err_span=$(err_class);
        err_span.html("Please enter "+data_attr); 
        err_span.addClass('show-element')
        $(this).addClass('outline-red');
    }
}

function validateForm(event) {
    event.preventDefault();
    form_ip.each(function(index){
        persons[inputs[index]]=$(this).val();
    });
    var formFlag=0;

    for(var i = 0 ; i < inputs.length; i++)
    {   
        if(persons[inputs[i]]=="")
        {
            var err_class='.'+inputs[i]+'-error';
            var err_span=$(err_class);
            err_span.html("Please enter "+inputs[i]); 
            err_span.addClass('show-element');
            var current_form_ip=$('.form-ip:nth-of-type('+i+')');
            current_form_ip.addClass('outline-red');
            formFlag=1; 
        }
    }
    submitform();

    function submitform(){

        if((formFlag===0)&&(emailerr===0)) 
        {
          var span_err_shown=$(".span-error");
          var form_ip=$('.form-ip');
          span_err_shown.each(function(){
            if($(this).hasClass('show-element'))
            {
                $(this).removeClass('show-element');
                $(this).addClass('hide-element');                  
            }
        });
        form_ip.each(function(){
            if($(this).hasClass('outline-red'))
            {
                $(this).removeClass('outline-red');
            }
        });
          var form_ip=$('.form-ip');
        form_ip.each(function(){
            $(this).val("");
        });

        }
    }
  }





//   form validation 2
var s_form = $(".subscribe-form");
s_form.on('submit', s_validateForm);
var s_form_ip=$('.s-form-ip');
var s_inputs=['s-email'];
var s_persons= {};
var s_emailerr;
var s_re_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
s_form_ip.each(function(){
    $(this).on("input",s_validateField);
});

function s_validateField() {
    // alert("s_fomr activated");
    var s_input_data = $(this).val();
    console.log("this inp="+s_input_data);
    var s_data_attr=$(this).attr("data-attr");
    console.log("data attr "+s_data_attr);
    if(s_data_attr=="s-email")
    {
        var s_is_email=s_re_email.test(s_input_data);
        var s_err_class='.'+s_data_attr+'-error';
        var s_err_span=$(s_err_class);
        if(!s_is_email) {
            s_err_span.html("Please enter "+s_data_attr.substr(2)); //ch1
            s_err_span.addClass('show-element');
            $(this).addClass('outline-red');
            s_emailerr=1;                  
         }
        else {
            s_emailerr=0;

             if(s_err_span.hasClass('show-element'))
            {
              s_err_span.removeClass('show-element');
              s_err_span.addClass('hide-element');                  
            }
            if($(this).hasClass("outline-red"))
            {
                $(this).removeClass("outline-red");
            }

        }
    }

    if(s_input_data=="")
    {
        var s_err_class='.'+s_data_attr+'-error';
        var s_err_span=$(s_err_class);
        s_err_span.html("Please enter "+s_data_attr.substr(2)); 
        s_err_span.addClass('show-element')
        $(this).addClass('outline-red');
    }
}

function s_validateForm(event) {
    event.preventDefault();
    s_form_ip.each(function(index){
        s_persons[s_inputs[index]]=$(this).val();
    });
    var s_formFlag=0;

    for(var i = 0 ; i < s_inputs.length; i++)
    {   
        if(s_persons[s_inputs[i]]=="")
        {
            var s_err_class='.'+s_inputs[i]+'-error';
            var s_err_span=$(s_err_class);
            s_err_span.html("Please enter "+s_inputs[i].substr(2)); 
            s_err_span.addClass('show-element');
            var current_s_form_ip=$('.s-form-ip:nth-of-type('+i+')');
            current_s_form_ip.addClass('outline-red');
            s_formFlag=1; 
        }
    }
    s_submitform();

    function s_submitform(){

        if((s_formFlag===0)&&(s_emailerr===0)) 
        {
          var s_span_err_shown=$(".s-span-error");
          var s_form_ip=$('.s-form-ip');
          s_span_err_shown.each(function(){
            if($(this).hasClass('show-element'))
            {
                $(this).removeClass('show-element');
                $(this).addClass('hide-element');                  
            }
        });
        s_form_ip.each(function(){
            if($(this).hasClass('outline-red'))
            {
                $(this).removeClass('outline-red');
            }
        });
          var s_form_ip=$('.s-form-ip');
        s_form_ip.each(function(){
            $(this).val("");
        });

        }
    }
  }

// Tab filter

    var filter=$(".day-filters");
    filter.on("click", function(e) {
    if(e.target && e.target.nodeName == "SPAN") {
    var x = $(".tabs");    
    if(x.hasClass("bg-green"))
    {
    x.removeClass("bg-green");        
    x.addClass("bg-black");
    }
      
      var tabitem=$(".dayitem");
      
      tabitem.each(function(){
        if($(this).hasClass("show-element"))
        {
          $(this).removeClass("show-element");
        }
        $(this).addClass("hide-element");
      });


    var classname_sel=e.target.className;
    $.each(tabitem,function(i,image){
       if($(this).hasClass(classname_sel)) {
         if($(this).hasClass("hide-element")){
          $(this).removeClass("hide-element");
          $(this).addClass("show-element");
      }
      }
  });

  if( $(e.target).parent().hasClass("bg-black"))
      {
        $(e.target).parent().removeClass("bg-black");
        $(e.target).parent().addClass("bg-green");
      }
    }  
});




























  

});

























