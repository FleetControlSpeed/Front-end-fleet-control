import { AbstractEntity } from "./abstract.entity";
import { Marca } from "./enums/marca";

export class Modelo extends AbstractEntity{
    nome!: string
    marca!: Marca

}