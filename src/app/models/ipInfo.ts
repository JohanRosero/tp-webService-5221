import { RespuestaIP, Timezone } from "../interfaces";

export class IpInfo implements RespuestaIP{
    regioncode!: string;
    country!: string;
    countrycode!: string;
    city!: string;
    timezone!: Timezone;
    ip!: string;
    latitude!: number;
    valid!: boolean;
    isv4mapped!: boolean;
    hostname!: string;
    continentcode!: string;
    hostdomain!: string;
    currencycode!: string;
    region!: string;
    isbogon!: boolean;
    countrycode3!: string;
    isv6!: boolean;
    longitude!: number;
    
}