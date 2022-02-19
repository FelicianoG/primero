import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import "../../style.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ProductoDataService from "../../services/producto.service";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomHiddenField, CustomTextField, Wait } from "../../Components";
import { Form } from "../../Components/Forms";

export default function ProductoEditor(props: any) {
  const navegar = useNavigate();
  const params = useParams();
  const ProductoId = params.id;
  const service = new ProductoDataService();

  const { data, isLoading } = useQuery(["getProductoById", ProductoId], async () => (await service.get(ProductoId ?? "")).data, {
    enabled: !!ProductoId,
  });

  const createMutation = useMutation<any, any, any, any>(async (data) => await service.create(data));

  const updateMutation = useMutation<any, any, any, any>(async (data) => await service.update(data));

  const onSubmit = (data: any) => {
    if (data.id === undefined) {
      createMutation.mutate(data);
      navegar("/Productos");
    } else {
      updateMutation.mutate(data);
      navegar("/Productos");
    }
  };

  return (
    <div>
      <Wait isLoading={isLoading}>
        <Form defaultValues={data} onSubmit={onSubmit}>
          <Card className="cardo">
            <Grid container spacing={2} marginLeft={6}>
              <Grid item xs={8}>
                <FormLabel className="titulo">Forma de Producto</FormLabel>
              </Grid>

              <Grid item xs={8}>
                <CustomHiddenField name="id" />
              </Grid>

              <Grid item xs={8}>
                <CustomTextField required name="nombre" label="Nombre" />
              </Grid>

              <Grid item xs={8}>
                <CustomTextField required name="codigo" label="Codigo" />
              </Grid>

              <Grid item xs={8}>
                <CustomTextField required name="peso" label="Peso" />
              </Grid>

              <Grid item xs={8}>
                <Button type="submit" variant="outlined">
                  Guardar
                </Button>
              </Grid>
              {isLoading && (
                <Box>
                  <span>Procesando..</span>
                </Box>
              )}
            </Grid>
          </Card>
        </Form>
      </Wait>
    </div>
  );
}
