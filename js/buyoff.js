define(["jquery","jquery-cookie"], function(){
    var buyoff = function(){
        $.ajax({
            url: "../data/buyoff.json",
            success: function(res){
                for(var i = 0; i < res.length; i++){
                    $(` <li>
                            <a index="1" href="#" target="_blank">
                              <img src="${res[i].p3}" alt="" width="120" height="120">
                              <h4 class="title">${res[i].S5}</h4>
                              <div class="price-box">${res[i].Mn}<span class="price">${res[i].q999}</span></div>
                            </a>
                        </li>
                        <li>
                            <a index="2" href="#" target="_blank">
                              <img src="${res[i].p1}" alt="" width="120" height="120">
                              <h4 class="title">${res[i].K5}</h4>
                              <div class="price-box">${res[i].Mn}<span class="price">${res[i].q89}</span></div>
                            </a>
                        </li>
                        <li>
                            <a index="3" href="#" target="_blank">
                              <img src="${res[i].p4}" alt="" width="120" height="120">
                              <h4 class="title">${res[i].k5p}</h4>
                              <div class="price-box">${res[i].Mn}<span class="price">${res[i].q6}</span></div>
                            </a>
                        </li>
                        <li>
                            <a index="4" href="detailed.html" target="_blank">
                                <img src="${res[i].p2}" alt="" width="120" height="120">
                                <h4 class="title">${res[i].k3}</h4>
                                 <div class="price-box">${res[i].Mn}
                                    <span class="price">${res[i].q7}</span>
                                    <del>${res[i].Mn}<span>${res[i].q9}</span></del>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a index="5" href="#" target="_blank">
                                <img src="${res[i].p5}" alt="" width="120" height="120">
                                <h4 class="title">${res[i].m2018}</h4>
                                <div class="price-box">${res[i].Mn}<span class="price">${res[i].q99}</span></div>
                            </a>
                        </li>
                        <li>
                            <a index="7" href="#" target="_blank">
                                <img src="${res[i].p}" alt="" width="120" height="120">
                                <h4 class="title">${res[i].mplay}</h4>
                                <div class="price-box">${res[i].Mn}
                                <span class="price">${res[i].q29}</span>
                                <del>${res[i].Mn}<span>${res[i].q32
                                }</span></del>
                                </div>
                            </a>
                        </li> `).appendTo($("#topmobile"));
                }
            }
        })
    }
    return {
       buyoff : buyoff
    }
})