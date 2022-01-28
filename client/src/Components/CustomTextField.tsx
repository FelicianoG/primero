import TextField from "@mui/material/TextField";
import { Controller, get } from "react-hook-form";

interface CustomTextfieldProps {
  
  control: any;
  required: boolean;
  label: string;
  name:string;
}

export default function CustomTextfield({
  
  control,
  required,
  label,
  name,

}: CustomTextfieldProps) {
 
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field}) => <TextField required={required} label={label} {...field} />}
      />
    </div>
  );
}
