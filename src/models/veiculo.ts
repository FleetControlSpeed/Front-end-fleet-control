import { AbstractEntity } from "./abstract.entity";
import { Cor } from "./enums/cor";
import { Tipo } from "./enums/tipo";
import { Modelo } from "./modelo";

export class Veiculo extends AbstractEntity{
    modelo!: Modelo
    placa!: string
    ano!: number
    cor!: Cor
    km!: number
    tipo!: Tipo

    constructor(){
        super()
        this.modelo = new Modelo
    }
}