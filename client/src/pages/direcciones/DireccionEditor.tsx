import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import "../../style.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import DireccionDataService from "../../services/direccion.service";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomHiddenField, CustomTextField, Wait } from "../../Components";
import { Form } from "../../Components/Forms";

export default function DireccionEditor(props: any) {
  const navigate = useNavigate();
  const params = useParams();
  const direccionId = params.id;
  const service = new DireccionDataService();

  const { data, isLoading } = useQuery(["getDireccionById", direccionId], async () => (await service.get(direccionId ?? "")).data, {
    enabled: !!direccionId,
  });
  const createMutation = useMutation<any, any, any, any>(async (data) => await service.create(data));

  const updateMutation = useMutation<any, any, any, any>(async (data) => await service.update(data));

  const onSubmit = (data: any) => {
    if (data.id === undefined) {
      createMutation.mutate(data);
      navigate("/direcciones");
    } else {
      updateMutation.mutate(data);
      navigate("/direcciones");
    }
  };

  return (
    <div>
      <Wait isLoading={isLoading}>
        <Form defaultValues={data} onSubmit={onSubmit}>
          <Card className="cardo">
            <Grid container spacing={2} marginLeft={6}>
              <Grid item xs={8}>
                <FormLabel className="titulo">Forma de direccion</FormLabel>
              </Grid>

              <Grid item xs={8}>
                <CustomHiddenField name="id" />
              </Grid>

              <Grid item xs={8}>
                <CustomTextField required name="calle" label="Calle" />
              </Grid>

              <Grid item xs={8}>
                <CustomTextField required name="numero" label="Numero" />
              </Grid>

              <Grid item xs={8}>
                <CustomTextField required name="colonia" label="Colonia" />
              </Grid>

              <Grid item xs={8}>
                <CustomTextField required name="cp" label="CP" />
              </Grid>

              <Grid item xs={8}>
                <CustomTextField required name="ciudad" label="Ciudad" />
              </Grid>

              <Grid item xs={8}>
                <CustomTextField required name="estado" label="Estado" />
              </Grid>

              <Grid item xs={8}>
                <CustomTextField required name="pais" label="País" />
              </Grid>

              <Grid item xs={8}>
                <Button type="submit" variant="outlined">
                  Guardar
                </Button>
              </Grid>

              {updateMutation.isSuccess && (
                <Box>
                  <span>Todo bien!</span>
                </Box>
              )}
              {updateMutation.isError && (
                <Box>
                  <span>Error!!!!</span>
                </Box>
              )}
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
