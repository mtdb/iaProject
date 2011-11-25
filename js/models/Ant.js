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
    this.move = function (direction){
        this.world.move(this,direction);
    }
    this.eat = function (direction){
        switch(direction){
            case 'n':
                this.world.interact(this.x,this.y-1,"eat");
                break;
            case 's':
                this.world.interact(this.x,this.y+1,"eat");
                break;
            case 'e':
                this.world.interact(this.x+1,this.y,"eat");
                break;
            case 'w':
                this.world.interact(this.x-1,this.y,"eat");
                break;
        }
    }
    this.dig = function (direction){
        switch(direction){
            case 'n':
                this.world.interact(this.x,this.y-1,"dig");
                break;
            case 's':
                this.world.interact(this.x,this.y+1,"dig");
                break;
            case 'e':
                this.world.interact(this.x+1,this.y,"dig");
                break;
            case 'w':
                this.world.interact(this.x-1,this.y,"dig");
                break;
        }
    }
}
