import { useState, useEffect } from "react";
import ListaEmpleados from "./ListaEmpleados";
import EmpleadoDataService from "../services/empleado.service";
import Empleado from "../types";
import { useForm } from "react-hook-form";
import EmpleadoEditor from "./EmpleadoEditor";
import { useNavigate } from "react-router-dom";

export default function CRUDEmpleados(){
    const navigate = useNavigate();
    const { reset, setValue }  = useForm<Empleado>();
    const [defaultValues, setDefaultValues]= useState<Empleado> ( {
        nombres: "",
        apellidos: "",
        edad: "",
        titulado: false,
        id:undefined,
    });

    function handleOnEditClick(id:string){

        navigate(`/empleados/${id}`);
    }
   
    return (
        <>
            {/* <EmpleadoEditor defaultValues={defaultValues} empleado={defaultValues}/> */}
            <ListaEmpleados handleEdit={(id:string)=>handleOnEditClick(id)} />
        </>
    );
};