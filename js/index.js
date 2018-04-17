define(["jquery","jquery-cookie"], function(){
    var index = function(){
        $.ajax({
            url: "../data/index.json",
            success: function(res){
                for(var i = 0; i < res.length; i++){
                    $(` <li class=" first ">
                            <a href="#" target="_blank">
                                <img src="${res[i].img1}" alt="">
                            </a>
                        </li>
                        <li class=" last ">
                            <a href="#" target="_blank">
                                <img src="${res[i].img}" alt="">
                            </a>
                        </li> `).appendTo($(".moto-index-mod"));
                }
            }
        })
    }
    return {
       index : index
    }
})


