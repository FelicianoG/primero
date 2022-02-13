
type Empleado = {
    nombres?: string | undefined;
    apellidos: string;
    edad: number | '';
    titulado: boolean;
    id? : string | undefined; 
  };

  type Direccion = {
    calle: string;
    numero: string;
    colonia: string;
    cp: string;
    ciudad: string;
    estado: string;
    pais: string;
    id? : string | undefined;
  }

  export type {Direccion, Empleado}