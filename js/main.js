require.config({
    paths: {
        "jquery":"jquery-1.10.1.min",
        "jquery-cookie":"jquery.cookie",
        index : "index",
        indexL : "indexL",
        buyoff : "buyoff",
        buyoffL: "buyoffL",
        buyoffR: "buyoffR",
        headFoot : "headFoot",
        buyoffT: "buyoffT",
        buyoffA: "buyoffA"

    }
})


    require(["index"], function(index){
         index.index();

})
    require(["indexL"], function(indexL){
         indexL.indexL();

})
    require(["headFoot",], function(headFoot){

         headFoot.headFoot();

})
    require(["buyoff",], function(buyoff){

         buyoff.buyoff();

})
    require(["buyoffL",], function(buyoffL){

         buyoffL.buyoffL();

})
    require(["buyoffR",], function(buyoffR){

         buyoffR.buyoffR();

})
    require(["buyoffT",], function(buyoffT){

         buyoffT.buyoffT();

})
    require(["buyoffA",], function(buyoffA){

         buyoffA.buyoffA();

})




