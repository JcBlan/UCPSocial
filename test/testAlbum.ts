import { expect } from "chai";
import { Album } from "../album";

describe("Test Album", () => {

    it("Debe agregar un album con un nombre especifico", () => {
        let album = new Album("album1");

        expect(album.getNombre()).to.equal("album1");
    })

})