import { useState } from "react";
import Empleados from "./Empleados";
import ListaEmpleados from "./ListaEmpleados";
import { useForm } from "react-hook-form";


type Empleado = {
    nombres: string;
    apellidos: string;
    edad: number | '';
    titulado: boolean; 
  };

export default function CRUDEmpleados(){

    const [myDefaultValues, setMyDefaultValues]= useState<Empleado> ( {
        nombres: "",
        apellidos: "",
        edad: '',
        titulado: false,});

    const [ toggleEditButton , setToggleEditButton ] = useState(false);
    const [id , setId] = useState('');

    function editToggler(id:string){
        setToggleEditButton(true)
        setMyDefaultValues({
            nombres: "F",
            apellidos: "G",
            edad: 20,
            titulado: false,})
            setId(id)
    }
    const { setValue } = useForm<Empleado>();

return (
    <>
        <Empleados id={id} myValues={myDefaultValues} toggleEditButton={toggleEditButton}/>
        <ListaEmpleados handleEdit={(id:string)=>editToggler(id)} />
    </>
);
};