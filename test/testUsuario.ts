import { expect } from 'chai';
import { Usuario } from '../usuario';

describe('Test Usuario', () => {
    
    it('Debe crear un usuario', () => {
        let usuario = new Usuario("nombre");
        expect(usuario.generarEnlaceVerificador()).to.equal("demo");
    });  


});