export class Album
{
    nombre : string;

    constructor(name : string)
    {
        this.nombre = name;
    }

    getNombre(){
        return this.nombre;
    }
}