import { expect } from 'chai';
import { Usuario } from '../usuario';

describe('Usuario', () => {
    it('Debe crear un usuario', () => {
        let usuario = new Usuario("correo");
        expect(usuario.generarEnlaceVerificador()).to.equal("demo");
    });  
});