/*
 * using utils.js
 * using models/Board.js
 */
 
var dictionary = {
        0:"empty",
        1:"groundA",
        2:"groundB",
        3:"groundC",
        4:"food",
        5:"ant",
    };
    
function Worldmap(board) {
    this.ground = [];
    this.board = board;
    this.turn = function () {}
    this.look = function (x,y) {return dictionary[this.ground[x][y]]};
    this.lenX = function (x,y) {return this.ground.length};
    this.lenY = function (x,y) {
        try {
            return this.ground[0].length
        } catch (e) {
            return 0;
        };
    };
    this.generate = function (x,y,populate) {
        if (populate == undefined) populate = 6;
        for (i=0; i<x; i++){
            row = []
            for (j=0; j<y; j++){
                aux = random(populate);
                if (aux < 4)
                    row[j] = aux;
                else
                    row[j] = 0;
            }
            this.ground[i] = row;
        }
        this.board.drawing(this);
    };
    this.populate = function (x) {
        for (i=0; i<this.lenX(); i++){
            for (j=0; j<this.lenY(); j++){
                if (this.ground[i][j] == 0){
                    aux = random(x);
                    if (aux == 0){
                        this.ground[i][j] = 4;
                        this.board.fill(i,j,"food");
                    }
                }
            }
        }
    };
    this.add = function (ant,x,y) {
        if (this.ground[x][y] == 0) {
            this.ground[x][y] = 5;
            this.board.fill(x,y,ant);
            ant.x = x;
            ant.y = y;
            return true;
        }
        return false;
    };
    this.wipe = function(x,y) {
        if (this.look(x,y) == "food"){
            this.ground[x][y] = 0;
            this.board.wipe(x,y);
        }
    };
    this.move = function(object,direction) {
        update = false;
        if (is(object) == "Ant"){
            if (direction == 'e' && this.ground[object.x+1][object.y] == 0) {
                this.ground[object.x][object.y] = 0;
                object.x+=1;
                update = true;
            }
            else if (direction == 'w' && this.ground[object.x-1][object.y] == 0){
                this.ground[object.x][object.y] = 0;
                object.x-=1;
                update = true;
            }
            else if (direction == 'n' && this.ground[object.x][object.y-1] == 0){
                this.ground[object.x][object.y] = 0;
                object.y-=1;
                update = true;
            }
            else if (direction == 's' && this.ground[object.x][object.y+1] == 0){
                this.ground[object.x][object.y] = 0;
                object.y+=1;
                update = true;
            }
            if (update) {
                this.ground[object.x][object.y] = 5;
                this.board.move(object,object.x,object.y);
                return true;
            }
        }
        else return false;
    };
    this.start = function () {
        __world__ = this;
        setInterval("__world__.turn()",SPEED);
    };
}
