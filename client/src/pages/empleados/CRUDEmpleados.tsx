
import { useNavigate } from "react-router-dom";
import ListaEmpleados from "./ListaEmpleados";

export default function CRUDEmpleados(){
    const navigate = useNavigate();
    
    function handleOnEditClick(id:string){
        navigate(`/empleados/${id}`);
    }
   
    return (
        <>
            <ListaEmpleados handleEdit={(id:string)=>handleOnEditClick(id)} />
        </>
    );
};