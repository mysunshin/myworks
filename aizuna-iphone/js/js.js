$(function(){
      var i=60;
    $(".right-one").click(function(){
        if(i==60)
            time_();
    })
    
    
    function time_(){
        var set=setInterval(function(){
            if (i==0){
                clearInterval(set);
                i=60;
                $(".right-one").html("获取验证码");
            }else{
                i--;
                $(".right-one").html(i+"s")
            }
        },1000)
    }
    
})