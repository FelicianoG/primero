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
import ProductoDataService from "../../services/producto.service";
import { Producto } from "../../types";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

interface ListaProductosProps {
  handleEdit: any;
}

export default function ListaProductos({ handleEdit }: ListaProductosProps) {
  const navigate = useNavigate();
  const handleAgregarOnClick = () => {
    navigate(`/producto`);
  };

  const service = new ProductoDataService();
  const { data } = useQuery(
    ["getProductos"],
    async () => (await service.getAll()).data
  );

  return (
    <>
      <p>Lista de Productos</p>
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
              data.map((row: Producto) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nombre}
                  </TableCell>
                  <TableCell align="right">{row.codigo}</TableCell>
                  <TableCell align="right">{row.peso}</TableCell>
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
