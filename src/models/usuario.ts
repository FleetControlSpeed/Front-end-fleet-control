import { AbstractEntity } from "./abstract.entity";
import { Cargo } from "./enums/cargo";

export class Usuario extends AbstractEntity{
    email!: string
    usuario!: string
    senha!: string
    cargo!: Cargo
    primeiroNome!: string
    sobrenome!: string
    cpf!: string
    telefone!: string
    dataNascimento!: string
    endereco!:string


}