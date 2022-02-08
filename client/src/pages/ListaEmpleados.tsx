import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { useState , useEffect } from "react";
import EmpleadoDataService from "../services/empleado.service";
import Empleado from "../types";

interface ListaEmpleadosProps{
  handleEdit:any;
}

export default function ListaEmpleados({handleEdit}:ListaEmpleadosProps){
    
const service = new EmpleadoDataService();

const [ rows , setRows ] = useState<Empleado[]>();
useEffect(()=> {

    const sendPostRequest = async () => {
        const res = await service.getAll();
        if(res){
            setRows(res.data);
        }
        else{
            alert('error al cargar los datos');
        }
    };
    sendPostRequest();
    
},[]);



return(
    <>
        <p>Lista de Empleados</p>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Edad</TableCell>
            <TableCell align="right">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows ? rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombres}
              </TableCell>
              <TableCell align="right">{row.apellidos}</TableCell>
              <TableCell align="right">{row.edad}</TableCell>
              <TableCell align="right"><Button onClick={()=>handleEdit(row.id)} variant="outlined">Editar</Button></TableCell>
            </TableRow>
          )) : 
          <TableRow>
              <TableCell>
                  <span>
                      No hay información que mostrar
                  </span>
              </TableCell>
          </TableRow>
          }

        </TableBody>
      </Table>
    </TableContainer>
    </>
)

}