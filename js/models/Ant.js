/*
 * using utils.js
 * using models/Worldmap.js
 */

function Ant(world) {
    this.id = undefined;
    this.x = 0;
    this.y = 0;
    this.world = world;
    this.spawn = function () {
        goin = false;
        while (!goin){
            randX = random(this.world.lenX());
            randY = random(this.world.lenY());
            goin = this.world.add(this,randX,randY);
        }
    };
    this.move = function (direction){
        this.world.move(this,direction);
    }
    this.eat = function (direction){
        switch(direction){
            case 'n':
                this.world.wipe(this.x,this.y-1);
                break;
            case 's':
                this.world.wipe(this.x,this.y+1);
                break;
            case 'e':
                this.world.wipe(this.x+1,this.y);
                break;
            case 'w':
                this.world.wipe(this.x-1,this.y);
                break;
        }
    }
    this.look = function (direction){
        switch (direction){
            case 'n':
                return this.world.look(this.x,this.y-1);
                break;
            case 's':
                return this.world.look(this.x,this.y+1);
                break;
            case 'e':
                return this.world.look(this.x+1,this.y);
                break;
            case 'w':
                return this.world.look(this.x-1,this.y);
                break;
        }
    }
}
