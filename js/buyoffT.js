define(["jquery","jquery-cookie"], function(){
    var buyoffT = function(){

        $.ajax({

            url: "../data/buyoffT.json",
            success: function(res){
                // console.log("a");
                for(var i = 0; i < res.length; i++){
                    $(` <li>
                        <a href="#">
                            <img src="${res[i].im1}" alt="">
                        </a>
                        <div class = "discript">
                            <a href="#">
                                <h3 class = "tit">${res[i].qy}</h3>
                                <div class = "price">
                                    <span>${res[i].jg}</span>
                                </div>
                                <p class = "txt">
                                    ${res[i].txt}
                                    <br>
                                    ${res[i].txt1}
                                    <br>
                                    ${res[i].txt2}
                                    <br>
                                    ${res[i].txt3}
                                </p>
                            </a>
                        </div>
                    </li> `).appendTo($(".bxslider"));
                }
            }
        })
    }
    return {
       buyoffT : buyoffT
    }
})
