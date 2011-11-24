/*
 * Ejemplo de una IA que camina aleatoriamente
 * por el mundo, y come una unidad de comida al
 * encontrarla en frente
 */

SPEED = 150;

world.stop();

world.turn = function () {
    r = random(4);
    if (r == 0) dir = 'n';
    if (r == 1) dir = 's';
    if (r == 2) dir = 'e';
    if (r == 3) dir = 'w';
    if (ant.look(dir) == "food") {
        ant.eat(dir);
        ant.move(dir);
    }
    else ant.move(dir);
}

world.start();

