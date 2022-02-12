import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import "../style.css";
import Button from "@mui/material/Button";
import CustomTextField from "../../components/CustomTextField";
import CustomSelect from "../../components/CustomSelect";
import Grid from "@mui/material/Grid";
import EmpleadoDataService from "../../services/empleado.service";
import CustomHiddenField from "../../components/CustomHiddenField";
import { useParams } from "react-router-dom";
import Form from "../../components/Forms/Form";
import { useQuery } from "react-query";
import { Box } from "@mui/material";
import Wait from "../../components/Wait";


export default  function EmpleadoEditor(props:any) {
  
  const params = useParams();
  const empleadoId = params.id;
  const service = new EmpleadoDataService();
  
  const {data, isLoading} = useQuery(['getEmpleadoById', empleadoId],async ()=> (await service.get(empleadoId ?? '')).data,
    { enabled: !!empleadoId}
  );

  const onSubmit = (data: any) => { 
    console.log(JSON.stringify(data, null, 2));
    if(data.id === undefined ){
      const crearEmpleado = async () => {
        const res = await service.create(data);
        if (res) {
          alert('Se han guardado los datos');
        }
        else {
          alert('error al guardar los datos: ');
        }
      };
      crearEmpleado();
    }

    else{
      const actualizarEmpleado = async () => {
        const res = await service.update(data);
        if (res) {
          alert('Se han guardado los datos');
        }
        else {
          alert('error al guardar los datos: ');
        }
      };
      actualizarEmpleado();
     
    }

  }

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
              <CustomHiddenField name='id'/>
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

            {/* <Grid item xs={8}>
              <FormControl required={true}>
                <FormLabel>Titulado</FormLabel>
                <CustomCheckbox name= "titulado" onChanges={handleCheck} value={false} />
              </FormControl>
            </Grid> */}

            <Grid item xs={8}>
              <Button type="submit" variant="outlined">Guardar</Button>
            </Grid>
            {isLoading && <Box><span>Procesando..</span></Box>}
          </Grid>
        </Card>
      </Form>
      </Wait>
    </div>
  );
}
