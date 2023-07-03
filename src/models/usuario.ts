import { AbstractEntity } from "./abstract.entity";
import { Cargo } from "./enums/cargo";

export class Usuario extends AbstractEntity{
    email !: string
    usuario!: string
    senha!: string
    cargo!: Cargo
    nome!: string
    cpf!: string
    telefone!: string
    dataNascimento!: Date
    endereco!:string

    constructor(){
        super();
    }
}