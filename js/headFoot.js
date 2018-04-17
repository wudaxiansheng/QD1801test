
define(["jquery","jquery-cookie"], function(){
    var headFoot = function(){


            var timer = null;
            $('.nav-wrap .item').hover(function(){
                var showLayer = $(this).attr("data-layer");
                clearInterval(timer);
                $(this).addClass('cur').siblings().removeClass('cur');
                $('#'+showLayer).show().siblings().hide();
                $('.sub-product-nav').slideDown(200);
            },function(){
                width=0;
                timer = setInterval(function(){
                    $('.sub-product-nav').slideUp(200);
                    $('.nav-wrap .item').removeClass('cur');
                },300)
            });

            $('.sub-product-nav').hover(function(){
                clearInterval(timer);
            },function(){
                timer = setInterval(function(){
                    $('.sub-product-nav').slideUp(200);
                    $('.nav-wrap .item').removeClass('cur');
                },300)
            })



        $.ajax({
            url: "../data/headFoot_1.json",
            success: function(res){
                for(var i = 0; i < res.length; i++){
                    $(` <dl>
                            <dt>${res[i].sj}</dt>
                            <dd>
                                <a href="#">${res[i].s5}</a>
                            </dd>
                            <dd>
                                <a href="#">${res[i].k5}</a>
                            </dd>
                            <dd>
                                <a href="#">${res[i].mz}</a>
                            </dd>
                            <dd>
                                <a href="#">${res[i].play}</a>
                            </dd>
                            <dd>
                                <a href="#">${res[i].ck}</a>
                            </dd>
                        </dl>
                        <dl>
                            <dt>${res[i].mm}</dt>
                            <dd><a href="#">${res[i].Tb}</a></dd>
                            <dd><a href="#">${res[i].JBL}</a></dd>
                            <dd><a href="#">${res[i].eye}</a></dd>
                            <dd><a href="#">${res[i].my}</a></dd>
                            <dd><a href="#">${res[i].gd}</a></dd>
                        </dl>
                        <dl>
                            <dt>${res[i].jp}</dt>
                            <dd><a href="#">${res[i].watch}</a></dd>
                            <dd><a href="#">${res[i].DP}</a></dd>
                            <dd><a href="#">${res[i].s5D}</a></dd>
                            <dd><a href="#">${res[i].cg}</a></dd>
                        </dl> `).appendTo($(".moto-sub-item"));
                }
            }
        })
    }
    return {
       headFoot : headFoot
    }
})




