import { Item, RespuestaNoticias } from "../interfaces";

export class Noticias implements RespuestaNoticias{
    status!: string;
    items!: Item[];

}