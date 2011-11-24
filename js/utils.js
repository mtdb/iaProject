function random(x){
    return Math.floor(Math.random()*x);
}

function is(object){
    if (object == undefined) return undefined;
    return object.__proto__.constructor.name;
}

function disp(object){
    if (is(object) == "Worldmap"){
        lenX = object.lenX();
        lenY = object.lenY();
        for (i=0; i<lenY; i++){
            row = []
            for (j=0; j<lenX; j++){
                row.push(object.ground(j,i));
            }
            console.log(row);
        }
    }
    else {
        console.log(object);
    }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
