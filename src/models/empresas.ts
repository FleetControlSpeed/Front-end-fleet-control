import { AbstractEntity } from "./abstract.entity";

export class Empresas extends AbstractEntity{
    nome!: string
    cep!: string
    endereco!: string
}