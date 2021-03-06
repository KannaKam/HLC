export interface Componente{
    nombre:string,
    ruta:string,
    icono:string,
    color:string
}
export interface Boton{
    nombre:string,
    numero: number
}
export interface RootObject {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Datum[];
  ad: Ad;
}

export interface Ad {
  company: string;
  url: string;
  text: string;
}

export interface Datum {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}