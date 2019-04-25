import { Album } from "./album";


export class Usuario 
{

    nombre : string;
    albumes : Array<Album>

    constructor(nombre : string) 
    {
        this.nombre = nombre;
        this.albumes = [];
    }

    generarEnlaceVerificador()
    {
        return "demo";
    }

    agregarAlbum(nombre : string) 
    {
        this.albumes.push( new Album("album1"));
    }

    quitarAlbum(nombre : string)
    {
        let album = new Album(nombre);
        this.albumes.splice(this.albumes.indexOf(album), 1)
    }
}