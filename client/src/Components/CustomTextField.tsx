import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

interface CustomTextfieldProps {
  
  label: string;
  name:string;
  required?: boolean;
}

export default function CustomTextfield({
  
  label,
  name,
  required,

}: CustomTextfieldProps) {
 
  const formContext = useFormContext();
  const { control } = formContext;

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
