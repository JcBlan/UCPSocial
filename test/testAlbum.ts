import { expect } from "chai";
import { Usuario } from "../usuario";

describe("Test Album", () => {

    it("Debe agregar un album con un nombre especifico", () => {
        
        let user = new Usuario("nombre");
        user.agregarAlbum("album1");
        expect(user.albumes[0].getNombre()).to.equal("album1");
    })

    it("Debe eliminar un album con un nombre especifico", () => {
        let user = new Usuario("nombre");
        user.agregarAlbum("album1");
        let album = user.albumes[0]
        user.quitarAlbum("album1")
        expect(user.albumes.indexOf(album)).to.equal(-1);
    })
})