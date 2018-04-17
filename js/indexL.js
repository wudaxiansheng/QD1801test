define(["jquery","jquery-cookie"],function(){
    var indexL = function(){
        var aPics = $(".lb").find(".lbt").find("li");
            var aBtns = $(".lb").find(".lbb").find("li");
            var zBtn = $("#zuo");
            var yBtn = $("#you");
            var iNow = 0;
            var timer = null;



            aBtns.click(function(){
                iNow = $(this).index();
                move()
            });

            zBtn.click(function(){
                iNow--;
                iNow = iNow % 4;
                move(iNow);
                })

            yBtn.click(function(){
                iNow++;
                iNow = iNow % 4;

                move(iNow);
                })

            function move(){
                aBtns.eq(iNow).animate({"opacity": 1}).siblings().animate({"opacity": 0.5});

                aPics.eq(iNow).animate({"opacity": 1, "zIndex": 2}).siblings().animate({"opacity": 0, "zIndex": 1});
            }
            function timerInner(){
                iNow++;
                if(iNow == 4){
                    iNow = 0
                }
                move();
            }
            timer = setInterval(timerInner, 3000);

            $(".lb").hover(function(){
                clearInterval(timer);
            },function(){
                timer = setInterval(timerInner, 3000);

            })
            // console.log(a);
            $.ajax({
                url: "../data/index_1.json",
                success:function(res){
                    // console.log(res);
                    for(var i = 0; i < res.length;i++){
                        //加载数据
                        $(".lb").find(".lbt").find("li").eq(i).find("img").attr({
                            "src": res[i].text});
                        // $(".lb").find(".lbt").find("li").eq(i).find("a").attr({"href": res[i].go, "target": "_Blank"});
                    }

                 }
            })
    }
    return {
            indexL:indexL
    }

})