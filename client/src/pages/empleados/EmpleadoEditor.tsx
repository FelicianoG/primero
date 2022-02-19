import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import "../../style.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import EmpleadoDataService from "../../services/empleado.service";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Wait, CustomHiddenField, CustomSelect, CustomTextField } from "../../Components";
import { Form } from "../../Components/Forms";

export default function EmpleadoEditor(props: any) {
  const navegar = useNavigate();
  const params = useParams();
  const empleadoId = params.id;
  const service = new EmpleadoDataService();

  const { data, isLoading } = useQuery(["getEmpleadoById", empleadoId], async () => (await service.get(empleadoId ?? "")).data, {
    enabled: !!empleadoId,
  });

  const createMutation = useMutation<any, any, any, any>(async (data) => await service.create(data));

  const updateMutation = useMutation<any, any, any, any>(async (data) => await service.update(data));

  const onSubmit = (data: any) => {
    if (data.id === undefined) {
      createMutation.mutate(data);
      navegar("/empleados");
    } else {
      updateMutation.mutate(data);
      navegar("/empleados");
    }
  };

  return (
    <div>
      <Wait isLoading={isLoading}>
        <Form defaultValues={data} onSubmit={onSubmit}>
          <Card className="cardo">
            <Grid container spacing={2} marginLeft={6}>
              <Grid item xs={8}>
                <FormLabel className="titulo">Forma de empleo</FormLabel>
              </Grid>

              <Grid item xs={8}>
                <CustomHiddenField name="id" />
              </Grid>

              <Grid item xs={8}>
                <CustomSelect
                  opciones={[
                    { valor: 10, label: "diez" },
                    { valor: 20, label: "veinte" },
                    { valor: 30, label: "treinta" },
                  ]}
                  required
                  name="edad"
                  label="Rango de Edad"
                />
              </Grid>

              <Grid item xs={8}>
                <CustomTextField required name="nombres" label="Nombre" />
              </Grid>

              <Grid item xs={8}>
                <CustomTextField required name="apellidos" label="Apellido" />
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
