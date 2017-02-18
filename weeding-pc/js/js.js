$(function(){
  $(".hover").click(function(){
    if($(".hover").hasClass("h")){
          $(this).addClass("h").siblings(".hover").removeClass("h")
           }
          else{
              $(this).addClass("h");
          }   
  })
 



var w_w=$(window).width();
    var i=0;
    var set;
    var len = $(".pic").length;
    $(".ppt").css({ "width": len * w_w });
    $(".pic").css({ "width": w_w });
    
    
    $(window).resize(function(){
         w_w=$(window).width();
         $(".ppt").css({"width":len*w_w});
         $(".pic").css({"width":w_w});
    }) 
    
     $(".pic").eq(i).fadeIn().siblings(".pic").fadeOut(0);
     
    function time(){
   set= setInterval(function(){
        if(i<len-1){
            i++;
        }else{
            i=0;
        }
        $(".coursor_").eq(i).addClass("hh").siblings(".coursor_").removeClass("hh");
        $(".pic").eq(i).fadeIn().siblings(".pic").fadeOut(0);
    },3000)
     }
    
     time();
     
     
       $(".banner").mouseover(function(){
            clearInterval(set);
        })

        $(".banner").mouseleave(function(){
            time();
        })
        
          $(".coursor_").click(function(){
        i=$(this).index()
        $(".coursor_").eq(i).addClass("hh").siblings(".coursor_").removeClass("hh");
       $(".pic").eq(i).fadeIn().siblings(".pic").fadeOut(0);
        $(this).addClass("hh").siblings(".coursor_").removeClass("hh")
        }) 
        
 })    