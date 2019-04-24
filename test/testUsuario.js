"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var usuario_1 = require("./usuario");
describe('Usuario', function () {
    it('Debe crear un usuario', function () {
        var usuario = new usuario_1.Usuario("correo");
        chai_1.expect(usuario.generarEnlaceVerificador()).to.equal("demo");
    });
});
