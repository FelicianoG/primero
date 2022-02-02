import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

interface CustomTextfieldProps {
  
  control: any;
  label: string;
  name:string;
  required?: boolean;
}

export default function CustomTextfield({
  
  control,
  label,
  name,
  required,

}: CustomTextfieldProps) {
 
  return (
    <div>
      <Controller
        name={name}
        rules={{required: required ? 'este campo es obligatorio' : undefined }}
        control={control}
        render={({ field, fieldState: {error} }) => <TextField error={!!error} helperText={error ? error.message : null} label={label} {...field } />}
      />
    </div>
  );
}
