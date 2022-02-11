import React, { useEffect, useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import "../style.css";
import Button from "@mui/material/Button";
import useCustomForm from "../hooks/useCustomForm";
import CustomTextField from "../components/CustomTextField";
import CustomCheckbox from "../components/CustomCheckbox";
import CustomSelect from "../components/CustomSelect";
import Grid from "@mui/material/Grid";
import { FormControl } from "@mui/material";
import EmpleadoDataService from "../services/empleado.service";
import Empleado from "../types";
import CustomHiddenField from "../components/CustomHiddenField";
import { useParams } from "react-router-dom";
import Form from "../components/Forms/Form";

export default function EmpleadoEditor(props:any) {
  
  const [ empleado, setEmpleado ] = useState<Empleado>();
  const [ state, setState] = useCustomForm();
  const params = useParams();
  const empleadoId = params.id;
   
  useEffect(()=>{

    const service = new EmpleadoDataService();  
      const getOne = async () => {
            const res = await service.get(empleadoId ?? '');
            if(res){
                setEmpleado(res.data);
            }
            else{
                alert('error al cargar los datos');
            }
        };
          getOne();
          

  },[])

  // function handleCheck(e: React.ChangeEvent<HTMLInputElement>, value: boolean) {
  //   setState({ ...state, titulado: e.target.checked });
  // }

  //HTTP Requests
  const service = new EmpleadoDataService();

  const onSubmit = (data: any) => { 
    console.log(JSON.stringify(data, null, 2));
    // if(data.id === undefined ){
    //   const crearEmpleado = async () => {
    //     const res = await service.create(data);
    //     if (res) {
    //       alert('Se han guardado los datos');
    //     }
    //     else {
    //       alert('error al guardar los datos: ');
    //     }
    //   };
    //   crearEmpleado();
      

    // }

    // else{
    //   const actualizarEmpleado = async () => {
    //     const res = await service.update(data);
    //     if (res) {
    //       alert('Se han guardado los datos');
    //     }
    //     else {
    //       alert('error al guardar los datos: ');
    //     }
    //   };
    //   actualizarEmpleado();
     
    // }

  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
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

          </Grid>
        </Card>
      </Form>
    </div>
  );
}
