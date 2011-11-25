var __dic__ = new Object;

if (localStorage["lang"] == undefined){
    if (navigator.language.indexOf('es')>=0) localStorage["lang"] = 'es';
    else localStorage["lang"] = 'en';
}

__dic__.playground = {
    "es":"Zona de Pruebas",
    "en":"Playground"
};
__dic__.example1 = {
    "es":"Ejemplo 1",
    "en":"Example 1"
};
__dic__.example2 = {
    "es":"Ejemplo 2",
    "en":"Example 2"
};
__dic__.example3 = {
    "es":"Ejemplo 3",
    "en":"Example 3"
};
__dic__.example4 = {
    "es":"Ejemplo 4",
    "en":"Example 4"
};
__dic__.run = {
    "es":"Ejecutar",
    "en":"Run"
};
__dic__.showin = {
    "es":"Ver en jsFiddle",
    "en":"Show in jsFiddle"
};
__dic__.documentation = {
    "es":"Documentacion",
    "en":"Documentation"
};


