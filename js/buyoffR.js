define(["jquery","jquery-cookie"], function(){
    var buyoffR = function(){
        $.ajax({
            url: "../data/buyoffR.json",
            success: function(res){
                for(var i = 0; i < res.length; i++){
                    $(` <li>
                            <a index="2" href="#" target="_blank">
                                <img src="${res[i].img1}" alt="" width="120" height="120">
                                <h4 class="title">${res[i].lw}</h4>
                              <div class="price-box">${res[i].mq}<span class="price">${res[i].o1}</span></div>
                            </a>
                        </li>
                        <li>
                            <a index="3" href="#" target="_blank">
                                <img src="${res[i].img2}" alt="" width="120" height="120">
                                <h4 class="title">${res[i].lg}</h4>
                                <div class="price-box">${res[i].mq}<span class="price">${res[i].o2}</span></div>
                            </a>
                        </li>
                        <li>
                            <a index="4" href="#" target="_blank">
                                <img src="${res[i].img3}" alt="" width="120" height="120">
                                <h4 class="title">${res[i].lh}</h4>
                                <div class="price-box">${res[i].mq}<span class="price">${res[i].o3}</span></div>
                            </a>
                        </li>
                        <li>
                            <a index="5" href="#" target="_blank">
                                <img src="${res[i].img4}" alt="" width="120" height="120">
                                <h4 class="title">${res[i].ls}</h4>
                                <div class="price-box">${res[i].mq}<span class="price">${res[i].o3}</span></div>
                            </a>
                        </li>
                        <li>
                            <a index="6" href="#" target="_blank">
                                <img src="${res[i].img5}" alt="" width="120" height="120">
                                <h4 class="title">${res[i].mx30}</h4>
                                <div class="price-box">${res[i].mq}<span class="price">${res[i].o4}</span></div>
                            </a>
                        </li>
                        <li>
                            <a index="10" href="#" target="_blank">
                                <img src="${res[i].img6}" alt="" width="120" height="120">
                                <h4 class="title">${res[i].l20}</h4>
                                <div class="price-box">${res[i].mq}<span class="price">${res[i].o5}</span></div>
                            </a>
                        </li> `).appendTo($("#topparts"));
                }
            }
        })
    }
    return {
       buyoffR : buyoffR
    }
})