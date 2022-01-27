import { useState } from "react";

interface Estado {
  nombre: string | null;
  estadoCivil: string;
  tecReact: boolean;
  tecPython: boolean;
  tecTypescript: boolean;
  select: string;
  pelicula: string | null;
  area: string;
  date: string;
  rating: number;
}

export default function useCustomForm(): [Estado, any] {
  const object: Estado = {
    nombre: null,
    estadoCivil: "Soltero",
    tecReact: false,
    tecPython: false,
    tecTypescript: false,
    select: '',
    pelicula: "",
    area: "",
    date: "1990-12-01T00:00:00",
    rating: 4
  };

  const [state, setState] = useState(object);

  return [state, setState];
}
