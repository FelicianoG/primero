import { useNavigate } from "react-router-dom";
import ListaProductos from "./ListaProductos";

//No saldria la misma cargar la lista directo del router en vez de usar este componente?

export default function CRUDProductos() {
  const navigate = useNavigate();

  function handleOnEditClick(id: string) {
    navigate(`/productos/${id}`);
  }

  return (
    <>
      <ListaProductos handleEdit={(id: string) => handleOnEditClick(id)} />
    </>
  );
}
