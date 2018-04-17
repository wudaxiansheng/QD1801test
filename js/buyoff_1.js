define(["jquery","jquery-cookie"], function(){
    var buyoffL = function(){
        $.ajax({
            url: "../data/buyoffL.json",
            success: function(res){
                for(var i = 0; i < res.length; i++){
                    $(` <li>
                            <a index="1" href="#" target="_blank">
                                <img src="${res[i].md}" alt="" width="120" height="120">
                                <h4 class="title">${res[i].my}</h4>
                                <div class="price-box">${res[i].mn}<span class="price">${res[i].m1}</span></div>
                            </a>
                        </li>
                        <li>
                            <a index="11" href="#" target="_blank">
                            <img src="${res[i].md1}" alt="" width="120" height="120">
                            <h4 class="title">${res[i].md}</h4>
                            <div class="price-box">${res[i].mn}<span class="price">${res[i].m2}</span></div>
                            </a>
                        </li>
                        <li>
                            <a index="13" href="#" target="_blank">
                                <img src="${res[i].md2}g" alt="" width="120" height="120">
                                <h4 class="title">${res[i].mk}</h4>
                                <div class="price-box">${res[i].mn}<span class="price">${res[i].m3}</span></div>
                            </a>
                        </li>
                        <li>
                            <a index="14" href="#" target="_blank">
                                <img src="${res[i].md3}" alt="" width="120" height="120">
                                <h4 class="title">${res[i].mh}</h4>
                                <div class="price-box">${res[i].mn}<span class="price">${res[i].m4}</span></div>
                            </a>
                        </li>
                        <li>
                            <a index="16" href="#" target="_blank">
                                <img src="${res[i].md4}" alt="" width="120" height="120">
                                <h4 class="title">${res[i].mt}</h4>
                                <div class="price-box">${res[i].mn}<span class="price">${res[i].m5}</span></div>
                            </a>
                        </li>
                        <li>
                            <a index="17" href="#" target="_blank">
                                <img src="${res[i].md5}" alt="" width="120" height="120">
                                <h4 class="title">${res[i].mj}</h4>
                                <div class="price-box">${res[i].mn}<span class="price">${res[i].m6}</span></div>
                            </a>
                        </li> `).appendTo($("#topmotomods"));
                }
            }
        })
    }
    return {
       buyoffL : buyoffL
    }
}