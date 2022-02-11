import { FormGroup } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

interface CustomTextAreaProps {
  label: string;
  name:string;
  required?:boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function CustomTextArea({
  label,
  name,
  required,
  onChange
}: CustomTextAreaProps) {
  
  const formContext = useFormContext();
  const { control } = formContext;

  return (
    <>
     
      <Controller 
        name={name}
        rules={{required: required ? "este campo es obligatorio" : undefined}}
        control={control}
        render={({ field, fieldState: {error} }) =>
      
          <FormGroup>
            <FormLabel error={!!error}>{label}</FormLabel>
            <TextField
              sx={{ width: 250 }}
              multiline
              rows={4}
              {...field}
              error={!!error}
              helperText={error ? error.message : null }
            />
          </FormGroup>
        }
      />
    </>
  );
}
