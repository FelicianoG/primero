
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

  type Producto = {
    nombre: string | undefined;
    codigo: number;
    peso: number;
    id?: string;
  }

  export type {Direccion, Empleado, Producto}