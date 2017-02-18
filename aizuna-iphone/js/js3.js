$(function(){
    var i=50;
    $(".time").click(function(){
        if(i==50)
            time_();
    })
    
    
    function time_(){
        var set=setInterval(function(){
            if (i==0){
                clearInterval(set);
                i=50;
                $(".time").html("获取验证码");
            }else{
                i--;
                $(".time").html(i+"s")
            }
        },1000)
    }
    
})