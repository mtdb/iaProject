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
    this.raw = [];
    this.ground = function (x,y) {
        try {
            return this.raw[x][y];  
        }
        catch (e){
            return -1
        }
    };
    this.board = board;
    this.turn = function () {}
    this.look = function (x,y) {return dictionary[this.ground(x,y)]};
    this.lenX = function (x,y) {return this.raw.length};
    this.lenY = function (x,y) {
        try {
            return this.raw[0].length
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
            this.raw[i] = row;
        }
        this.board.drawing(this);
    };
    this.populate = function (x) {
        for (i=0; i<this.lenX(); i++){
            for (j=0; j<this.lenY(); j++){
                if (this.ground(i,j) == 0){
                    aux = random(x);
                    if (aux == 0){
                        this.actualize(i,j,4);
                        this.board.fill(i,j,"food");
                    }
                }
            }
        }
    };
    this.actualize = function (x,y,value) {
        this.raw[x][y] = value;
    };
    this.add = function (ant,x,y) {
        // bug: eliminate old instance of ant...
        if (this.ground(x,y) == 0) {
            this.actualize(x,y,5);
            this.board.fill(x,y,ant);
            ant.x = x;
            ant.y = y;
            return true;
        }
        return false;
    };
    this.interact = function(x,y,action) {
        initialState = this.ground(x,y);
        finalState = interact(initialState,action);
        if (initialState != finalState){
            this.actualize(x,y,finalState)
            this.board.actualize(x,y,dictionary[finalState]);
        }
    };
    this.move = function(object,direction) {
        update = false;
        if (is(object) == "Ant"){
            if (direction == 'e' && this.ground(object.x+1,object.y) == 0) {
                this.actualize(object.x,object.y,0);
                object.x+=1;
                update = true;
            }
            else if (direction == 'w' && this.ground(object.x-1,object.y) == 0){
                this.actualize(object.x,object.y,0);
                object.x-=1;
                update = true;
            }
            else if (direction == 'n' && this.ground(object.x,object.y-1) == 0){
                this.actualize(object.x,object.y,0);
                object.y-=1;
                update = true;
            }
            else if (direction == 's' && this.ground(object.x,object.y+1) == 0){
                this.actualize(object.x,object.y,0);
                object.y+=1;
                update = true;
            }
            if (update) {
                this.actualize(object.x,object.y,5);
                this.board.move(object,object.x,object.y);
                return true;
            }
        }
        else return false;
    };
    this.running = false;
    this.start = function () {
        __world__ = this;
        if (!this.running){
            __life__ = setInterval("__world__.turn()",SPEED);
            this.running = true;
        }
    };
    this.stop = function () {
        try {
            clearInterval(__life__);
            this.running = false;
        } catch (e) {
            return 1;
        };
        
    };
}

/*
 * World interact rules:
 *  ________________________________
 * |        | 0 | 1 | 2 | 3 | 4 | 5 |
 * | eat    | 0 | 1 | 2 | 3 | 0 | 5 |
 * | dig    | 0 | 0 | 1 | 2 | 4 | 5 |
 * |________________________________|
 * 
 * knowing that:
 *      0 is empty,
 *      1 is groundA,
 *      2 is groundB,
 *      3 is groundC,
 *      4 is food,
 *      5 is ant
 */
 
 function interact(value, action) {
    switch(action){
        case("eat"):
            if (value == 4) return 0;
            break;
        case("dig"):
            if (value > 0 && value < 4) return value-1
            break;
    }
    return value;
 }
 
