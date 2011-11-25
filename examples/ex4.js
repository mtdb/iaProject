/*
 * Ejemplo donde se crea un mundo con
 * pocos obstaculos y dos hormigas
 * compitiendo por alimento
 */
 
SPEED = 150;

world.stop();
world.generate(32,24,50);
world.populate(6);

var ant1 = new Ant(world);
ant1.spawn();

var ant2 = new Ant(world);
ant2.spawn();

world.turn = function () {
    dir = randomMove();
    if (ant1.look(dir) == "food") {
        ant1.eat(dir);
        ant1.move(dir);
    }
    else ant1.move(dir);
    dir = randomMove();
    if (ant2.look(dir) == "food") {
        ant2.eat(dir);
        ant2.move(dir);
    }
    else ant2.move(dir);
}

world.start();

function randomMove() {
    r = random(4);
    if (r == 0) return 'n';
    if (r == 1) return 's';
    if (r == 2) return 'e';
    if (r == 3) return 'w';
}
