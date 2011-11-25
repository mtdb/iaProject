/*
 * using utils.js
 * using models/Worldmap.js
 * using models/Ant.js
 * using models/Board.js
 */
var SPEED = 150;
window.onload = function () {

    var board = new Board("canvas");
    
    var world = new Worldmap(board);
    world.generate(32,24);
    world.populate(12);
    
    var ant = new Ant(world);
    ant.spawn();
    
    $("#run").click(function () {
        try {
            eval($("#code").val());
        } catch (e) {
            alert(e.message || e);
        }
    });
    
    $(".ex").click(function () {
        $("#code").load("examples/ex"+$(this).data("id")+".js")
    });
    
    $("#lang-menu li a").click(function () {
        localStorage["lang"] = $(this).data("lang");
        culture();
    });
    
    culture();
};

function culture() {
    $(".resource").each(function () {
        $(this).text(eval("__dic__."+$(this).data("key")+"['"+localStorage["lang"]+"']"));
    });
}

