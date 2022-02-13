import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import "../../style.css";
import Button from "@mui/material/Button";
import CustomTextField from "../../components/CustomTextField";
import Grid from "@mui/material/Grid";
import DireccionDataService from "../../services/direccion.service";
import CustomHiddenField from "../../components/CustomHiddenField";
import { useParams } from "react-router-dom";
import Form from "../../components/Forms/Form";
import { useQuery } from "react-query";
import { Box } from "@mui/material";
import Wait from "../../components/Wait";


export default  function DireccionEditor(props:any) {
  
  const params = useParams();
  const direccionId = params.id;
  const service = new DireccionDataService();
  
  const {data, isLoading} = useQuery(['getDireccionById', direccionId],async ()=> (await service.get(direccionId ?? '')).data,
    { enabled: !!direccionId}
  );

  const onSubmit = (data: any) => { 
    
    if(data.id === undefined ){
      const crearDireccion = async () => {
        const res = await service.create(data);
        if (res) {
          alert('Se han guardado los datos');
        }
        else {
          alert('error al guardar los datos: ');
        }
      };
      crearDireccion();
    }

    else{
      const actualizarDireccion = async () => {
        const res = await service.update(data);
        if (res) {
          alert('Se han guardado los datos');
        }
        else {
          alert('error al guardar los datos: ');
        }
      };
      actualizarDireccion();
     
    }

  }

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
              <CustomHiddenField name='id'/>
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
