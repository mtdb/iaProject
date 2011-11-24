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
    
    //world.generate(32,24,50);
    //world.populate(2);
    
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
};

