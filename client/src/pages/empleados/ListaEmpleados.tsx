import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import EmpleadoDataService from "../../services/empleado.service";
import { Empleado } from "../../types";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

interface ListaEmpleadosProps {
  handleEdit: any;
}

export default function ListaEmpleados({ handleEdit }: ListaEmpleadosProps) {
  const navigate = useNavigate();
  const handleAgregarOnClick = () => {
    navigate(`/empleado`);
  };

  const service = new EmpleadoDataService();
  const { data } = useQuery(
    ["getEmpleados"],
    async () => (await service.getAll()).data
  );

  return (
    <>
      <p>Lista de Empleados</p>
      <Button onClick={() => handleAgregarOnClick()} variant="outlined">
        +
      </Button>
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
            {data ? (
              data.map((row: Empleado) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nombres}
                  </TableCell>
                  <TableCell align="right">{row.apellidos}</TableCell>
                  <TableCell align="right">{row.edad}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => handleEdit(row.id)}
                      variant="outlined"
                    >
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>
                  <span>No hay informaci??n que mostrar</span>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
