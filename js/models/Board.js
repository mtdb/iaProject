/*
 * using utils.js
 * using raphael-min.js
 * using models/Worldmap.js
 */

function Board(renderDiv) {
    this.render = renderDiv;
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
                    this.content.rect(cx, cy, 20, 20).attr({fill: "#fff", stroke: "none"});
                    break;
                case "groundA":
                    this.content.rect(cx, cy, 20, 20).attr({fill: "#B18904", stroke: "none"});
                    break;
                case "groundB":
                    this.content.rect(cx, cy, 20, 20).attr({fill: "#886A08", stroke: "none"});
                    break;
                case "groundC":
                    this.content.rect(cx, cy, 20, 20).attr({fill: "#5F4C0B", stroke: "none"});
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
    }
    this.wipe = function (x,y) {
        for (i in this.objects)
            if (this.objects[i].attrs.cx == 20*x+10 && this.objects[i].attrs.cy == 20*y+10){
                this.objects[i].remove();
                delete this.objects[i];
                break;
            }
    };
    this.move = function (object,x,y) {
        target = this.content.getById(object.id);
        target.animate(Raphael.animation({cx: 20*x+10, cy: 20*y+10}, SPEED));
    };       
}
