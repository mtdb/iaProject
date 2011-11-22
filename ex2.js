/*
 * Ejemplo que ejecuta una instrucción
 * a la vez y muestra información de la
 * corrida en la consola javascript
 */
 
SPEED = 150;

world.turn = function () {
    disp("Antes de moverme");
    disp(world);
    ant.move('n');
    disp("Despues de moverme");
    disp(world);
    disp("Mostrar el objeto Ant");
    disp(ant);
}

world.turn();

