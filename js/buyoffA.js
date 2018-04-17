define(["jquery","jquery-cookie"], function(){
    var buyoffA = function(){

        $.ajax({

            url: "../data/buyoffA.json",
            success: function(res){
                // console.log("a");
                for(var i = 0; i < res.length; i++){
                    $(` <ul class="index-product-list">
                    <li>
                        <a index="2" href="#" target="_blank">
                            <span class="i-mark i-mark-xp">${res[i].xp}</span>
                            <img src="${res[i].img1}" alt="" width="180" height="180">
                            <div class="discript">
                                <h3 class="tit">${res[i].mz}</h3>
                                <p class="txt">${res[i].cs}</p>
                                <div class="price">
                                    <span>${res[i].j99}</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a index="4" href="#" target="_blank">
                            <span class="i-mark i-mark-zp">${res[i].zp}</span>
                            <img src="${res[i].img2}" alt="" width="180" height="180">
                            <div class="discript">
                                <h3 class="tit">${res[i].qy}</h3>
                                <p class="txt">${res[i].qh}</p>
                                <div class="price">
                                    <span>${res[i].j15}</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a index="5" href="#" target="_blank">
                            <span class="i-mark i-mark-zp">${res[i].zp}</span>
                            <img src="${res[i].img3}" alt="" width="180" height="180">
                            <div class="discript">
                                <h3 class="tit">${res[i].qy}</h3>
                                <p class="txt">${res[i].nm}</p>
                                <div class="price">
                                    <span>${res[i].j14}</span>
                                    <del>${res[i].j15}</del>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a index="18" href="#" target="_blank">
                            <span class="i-mark i-mark-rx">${res[i].rx}</span>
                            <img src="${res[i].img4}" alt="" width="180" height="180">
                            <div class="discript">
                                <h3 class="tit">${res[i].js}</h3>
                                <p class="txt">${res[i].xs}</p>
                                <div class="price">
                                    <span>${res[i].j29}</span>
                                    <del>${res[i].j32}</del>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul> `).appendTo($(".moto-mod-wrap"));
                }
            }
        })
    }
    return {
       buyoffA : buyoffA
    }
})
