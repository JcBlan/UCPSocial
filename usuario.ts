export class Usuario {
    
    correo : string; 

    constructor(mail : string) {
        this.correo = mail;
    }

    generarEnlaceVerificador() {
        return "demo";
    }

}