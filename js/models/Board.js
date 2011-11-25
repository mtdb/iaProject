/*
 * using utils.js
 * using raphael-min.js
 * using models/Worldmap.js
 */

function Board(renderDiv) {
    this.render = renderDiv;
    this.content = undefined;
    this.objects = [];
    this.drawing = function (worldmap) {
        $("#"+this.render).html("");
        lenX = worldmap.lenX();
        lenY = worldmap.lenY();
        this.content = Raphael(this.render, lenX*20, lenY*20);
        this.content.clear();
        for (i=0; i<lenX; i++){
            for (j=0; j<lenY; j++){
                this.fill(i,j,worldmap.look(i,j));
            }
        }
    };
    this.fill = function (x,y,object,id){
        cx = 20*x;
        cy = 20*y;
        if (is(object) == "String"){
            switch (object){
                case "empty":
                    this.content.rect(cx, cy, 20, 20).attr({fill: "#fff", stroke: "none"}).toBack();
                    break;
                case "groundA":
                    this.content.rect(cx, cy, 20, 20).attr({fill: "#B18904", stroke: "none"}).toBack();
                    break;
                case "groundB":
                    this.content.rect(cx, cy, 20, 20).attr({fill: "#886A08", stroke: "none"}).toBack();
                    break;
                case "groundC":
                    this.content.rect(cx, cy, 20, 20).attr({fill: "#5F4C0B", stroke: "none"}).toBack();
                    break;
                case "food":
                    objectAux = this.content.circle(cx+10, cy+10, 5).attr({fill: "blue"});
                    object.id = objectAux.id;
                    this.objects.push(objectAux);
                    break;
            }
        }
        else{
            switch (is(object)){
                case "Ant":
                    objectAux = this.content.circle(cx+10, cy+10, 5).attr({fill: "black"});
                    object.id = objectAux.id;
                    this.objects.push(objectAux);
                    break;
            }
        }
    };
    this.actualize = function (x,y,object) {
        oldObject = this.content.getElementByPoint(20*x+10+$("#"+this.render+" svg").position().left, 20*y+10+$("#"+this.render+" svg").position().top);
        oldObject.remove();
        this.fill(x,y,object);
        
    };
    this.move = function (object,x,y) {
        target = this.content.getById(object.id);
        target.animate(Raphael.animation({cx: 20*x+10, cy: 20*y+10}, SPEED));
    };       
}
