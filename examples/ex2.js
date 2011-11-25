/*
 * Ejemplo de una IA que camina aleatoriamente
 * por el mundo, come una unidad de comida al
 * encontrarla en frente y si se encuentra
 * un pedazo de tierra tiene 50% de probabilidad
 * de cavar.
 */

SPEED = 150;

world.stop();

dictionary = {0:'n',1:'s',2:'e',3:'w'}
world.turn = function () {
    dir = dictionary[random(4)];
    if (ant.look(dir) == "food") {
        ant.eat(dir);
        ant.move(dir);
    }
    else if (ant.look(dir) == "groundA" ||
             ant.look(dir) == "groundB" ||
             ant.look(dir) == "groundC") {
        ant.dig(dir);
    }
    else ant.move(dir);
}

world.start();

