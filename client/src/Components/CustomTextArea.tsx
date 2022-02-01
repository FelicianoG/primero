import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

interface CustomTextAreaProps {
  label: string;
  estado: string;

  name:string;
  control: any;

  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function CustomTextArea({
  label,
  estado,
  name,
  control,

  onChange
}: CustomTextAreaProps) {
  return (
    <>
      
      


      <Controller 
        name={name}
        rules={{required: `${name} requerido`}}
        control={control}
        render={({ field, fieldState: {error} }) =>
      
        <>
        <FormLabel error={!!error}>{label}</FormLabel>
        <TextField
          sx={{ width: 250 }}
          multiline
          rows={4}
          {...field}
          error={!!error}
          helperText={error ? error.message : null }
        />
        </>
        }
      />
    </>
  );
}
