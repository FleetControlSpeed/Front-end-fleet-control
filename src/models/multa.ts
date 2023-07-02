import { AbstractEntity } from "./abstract.entity";
import { Usuario } from "./usuario";

export class multa extends AbstractEntity{
    valor !: number
    tipoMulta !: string
    dataMulta !: Date
    usuario !: Usuario
    constructor(){
        super()
        this.usuario = new Usuario
    }
}