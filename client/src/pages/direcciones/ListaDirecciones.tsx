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
import { Direccion } from "../../types";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import DireccionDataService from "../../services/direccion.service";

interface ListaEmpleadosProps {
  handleEdit: any;
}

export default function ListaEmpleados({ handleEdit }: ListaEmpleadosProps) {
  const navigate = useNavigate();

  const handleAgregarOnClick = () => {
    navigate(`/direccion`);
  };

  const service = new DireccionDataService();

  const { data } = useQuery(
    ["getDirecciones"],
    async () => (await service.getAll()).data
  );

  return (
    <>
      <p>Lista de Direcciones</p>
      <Button onClick={() => handleAgregarOnClick()} variant="outlined">
        +
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Calle</TableCell>
              <TableCell>Número</TableCell>
              <TableCell align="right">Colonia</TableCell>
              <TableCell align="right">CP</TableCell>
              <TableCell align="right">Ciudad</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell align="right">País</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data.map((row: Direccion) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.calle}
                  </TableCell>
                  <TableCell align="right">{row.numero}</TableCell>
                  <TableCell align="right">{row.colonia}</TableCell>
                  <TableCell align="right">{row.cp}</TableCell>
                  <TableCell align="right">{row.ciudad}</TableCell>
                  <TableCell align="right">{row.estado}</TableCell>
                  <TableCell align="right">{row.pais}</TableCell>
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
                  <span>No hay información que mostrar</span>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
