import React, { useState } from "react";
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
import { useForm } from "react-hook-form";
import EmpleadoDataService from "../services/empleado.service";


type Empleado = {
  nombres: string;
  apellidos: string;
  edad: number | '';
  titulado: boolean; 
};


interface EmpleadoProps {
  toggleEditButton : boolean;
  myValues : any;
  id : string
 }

export default function Empleado({ toggleEditButton , myValues, id }:EmpleadoProps) {
  

  const [state, setState] = useCustomForm();
  const { control, handleSubmit, setValue } = useForm<Empleado>({
    defaultValues: {
      nombres: "",
      apellidos: "",
      edad: '',
      titulado: false,},
  });

  if(myValues){
    setValue('nombres',myValues.nombres)
    setValue('apellidos',myValues.apellidos)
    setValue('edad',myValues.edad)
    setValue('titulado',myValues.titulado)
  }

  function handleCheck(e: React.ChangeEvent<HTMLInputElement>, value: boolean) {
    setState({ ...state, titulado: e.target.checked });
  }

  const submitButton = !toggleEditButton ? 
    <Button type="submit" variant="outlined">Submit</Button> : 
    <Button type="submit" variant="outlined">Edit</Button>;

  //HTTP Requests
  const service = new EmpleadoDataService();

  const onSubmit = (data: Empleado) => { 
    if(!toggleEditButton){const sendPostRequest = async () => {
      const res = await service.create(data);
      if (res) {alert('Se han guardado los datos')}
      else {alert('error al guardar los datos: ')}
      };
      sendPostRequest();
      console.log(JSON.stringify(data, null, 2))
    }
    else{

      const sendPostRequest = async () => {
        const res = await service.update(id,data);
        if (res) {alert('Se han guardado los datos')}
        else {alert('error al guardar los datos: ')}
      };
      sendPostRequest();
      console.log(JSON.stringify(data, null, 2))}





    }
  

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="cardo">
          <Grid container spacing={2} marginLeft={6}>
            <Grid item xs={8}>
              <FormLabel className="titulo">Forma de empleo</FormLabel>
            </Grid>

            <Grid item xs={8}>
              <CustomSelect
                opciones={[
                  { valor: 10, label: "diez" },
                  { valor: 20, label: "veinte" },
                  { valor: 30, label: "treinta" },
                ]}
                control={control}
                required
                name="edad"
                label="Rango de Edad"
              />
            </Grid>

            <Grid item xs={8}>
              <CustomTextField required control={control} name="nombres" label="Nombre" />
            </Grid>

            <Grid item xs={8}>
              <CustomTextField required control={control} name="apellidos" label="Apellido" />
            </Grid>

            <Grid item xs={8}>
              <FormControl required={true}>
                <FormLabel>Titulado</FormLabel>
                <CustomCheckbox label='' name= "titulado" control={control} checked={state.titulado} onChanges={handleCheck} value={false} />
              </FormControl>
            </Grid>

            <Grid item xs={8}>
              
                
                  {submitButton}

                  

            </Grid>
          </Grid>
        </Card>
      </form>
    </div>
  );
}
