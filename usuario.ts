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
}