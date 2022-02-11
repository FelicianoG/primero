import Select from "@mui/material/Select";
import { Controller, useFormContext } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { FormHelperText } from "@mui/material";

type opciones = {
  valor: number;
  label: string;
};

interface CustomSelectProps {
  defaultValue?: string | undefined | null;
  opciones: opciones[];
  name: string;
  label: string;
  required?: boolean;
}

export default function CustomSelect({ defaultValue, opciones, name, label, required }: CustomSelectProps) {
  const formContext = useFormContext();
  const { control } = formContext;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ?? ""}
        rules={{ required: required ? "este campo es obligatorio" : undefined }}
        render={({ field, fieldState: { error } }) => (
          <FormControl fullWidth>
            <InputLabel id="labelId" error={!!error}>
              {label}
            </InputLabel>
            <Select error={!!error} id="labelId" label={label} variant="outlined" {...field}>
              {opciones.map((opcion, key) => (
                <MenuItem key={key} value={opcion.valor}>
                  {opcion.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText error={!!error}>{error ? error.message : null}</FormHelperText>
          </FormControl>
        )}
      />
    </div>
  );
}
