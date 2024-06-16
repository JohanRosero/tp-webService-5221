export interface CountryResponse {
    code: Code;
    name: Name;
    flag: Flag;
    independent: boolean;
    administrativelanguages: any[];
    subdivisions: any[];
}

export interface Code {
    aplha2code: string;
    alpha3code: string;
    numericcode: string;
}

export interface Flag {
    officialflag: Officialflag;
    unofficialflag?: Officialflag;
}

export interface Officialflag {
    svg: string;
    png: string;
}

export interface Name {
    shortname: string;
    shortnamelowercase: string;
    fullname?: string;
}

export interface RespuestaNoticias {
    status: string;
    items: Item[];
}

export interface Item {
    title: string;
    snippet: string;
    publisher: string;
    timestamp: string;
    newsUrl: string;
    images?: Images;
    hasSubnews?: boolean;
    subnews?: Item[];
}

export interface Images {
    thumbnail: string;
    thumbnailProxied: string;
}

export interface RespuestaIP {
regioncode: string;
country: string;
countrycode: string;
city: string;
timezone: Timezone;
ip: string;
latitude: number;
valid: boolean;
isv4mapped: boolean;
hostname: string;
continentcode: string;
hostdomain: string;
currencycode: string;
region: string;
isbogon: boolean;
countrycode3: string;
isv6: boolean;
longitude: number;
}

export interface Timezone {
    date: Date;
    offset: string;
    name: string;
    id: string;
    time: string;
    abbr: string;
}

export interface RespRecetas {
    image:       string;
    title:       string;
    newCategory: string;
    path:        string;
}
export interface DetallesReceta {
    "Imagen de la receta":      string;
    "Titulo de la preparacion": string;
    Raciones:                   string;
    Duracion:                   string;
    Ingredientes:               string[];
    "Pasos de preparacion":     string[];
}
