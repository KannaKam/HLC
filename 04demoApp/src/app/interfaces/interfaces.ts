export interface Componente{
    nombre:string,
    ruta:string,
    icono:string,
    color:string
}

export interface Boton{
    nombre:string,
    numero: number,
    color: string
}

export interface RespuestaUsuarios {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Usuario[];
  ad: Ad;
}

export interface Ad {
  company: string;
  url: string;
  text: string;
}

export interface Usuario {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
