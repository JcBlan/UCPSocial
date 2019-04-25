import { expect } from "chai";
import { Usuario } from "../usuario";
import { Album } from "../album";

describe("Test Album", () => {

    it("Debe agregar un album con un nombre especifico", () => {
        
        const user = new Usuario("nombre");
        user.agregarAlbum("album1");
        expect(user.albumes[0].getNombre()).to.equal("album1");
    })


})