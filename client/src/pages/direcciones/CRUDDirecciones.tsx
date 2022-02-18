import { useNavigate } from "react-router-dom";
import ListaDirecciones from "./ListaDirecciones";

export default function CRUDDirecciones() {
  const navigate = useNavigate();

  function handleOnEditClick(id: string) {
    navigate(`/direcciones/${id}`);
  }

  return (
    <>
      <ListaDirecciones handleEdit={(id: string) => handleOnEditClick(id)} />
    </>
  );
}
