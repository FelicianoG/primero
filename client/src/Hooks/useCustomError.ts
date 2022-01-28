import { useState } from "react";

interface Error {
  nombre: boolean;
  estadoCivil: boolean;
  checkbox: boolean;
  select: boolean;
  pelicula: boolean;
  area: boolean;
  rating: boolean;
}

export default function useCustomError(): [Error, any] {
  const object: Error = {
    nombre: false,
    estadoCivil: false,
    checkbox: false,
    select: false,
    pelicula: false,
    area: false,
    rating: false
  };

  const [state, setState] = useState(object);

  return [state, setState];
}
