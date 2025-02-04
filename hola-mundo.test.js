
// holaMundo.test.js
const holaMundo = require('./hola-mundo');

test('Debe retornar "Hola, Mundo!"', () => {
    expect(holaMundo()).toBe("Hola, Mundo!");
    });

