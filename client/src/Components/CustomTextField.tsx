import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

interface CustomTextfieldProps {
  
  control: any;
  label: string;
  name:string;
}

export default function CustomTextfield({
  
  control,
  label,
  name,

}: CustomTextfieldProps) {
 
  return (
    <div>
      <Controller
        name={name}
        rules={{required: `${name} requerido`}}
        control={control}
        render={({ field, fieldState: {error} }) => <TextField error={!!error} helperText={error ? error.message : null} label={label} {...field } />}
      />
    </div>
  );
}
