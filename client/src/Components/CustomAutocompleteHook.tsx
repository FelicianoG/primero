import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Controller } from "react-hook-form";

type OptionItem = {
  label: string;
  year: number;
};

interface AutocompleteHookProps {
  name: string;
  label: string;
  control: any;
  required: boolean;
  options: OptionItem[];
  //handleOnChange: (e:React.SyntheticEvent,newValue: OptionItem | null)=> void;
}

export default function CustomAutocompleteHook({
  name,
  label,
  control,
  required,
  options,
}: //handleOnChange,
AutocompleteHookProps) {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: `${name} requerido` }}
        render={({ field, fieldState: { error } }) => (
          <Autocomplete
            // disablePortal

            id={name}
            {...field}
            onChange={(e, newValue: OptionItem) => {
              field.onChange(newValue);
            }}
            //Checa, uno por uno y en orden, que el valor se encuentre dentro del arreglo opciones
            isOptionEqualToValue={(option, value) => {
              return JSON.stringify(option) === JSON.stringify(value);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField error={!!error} helperText={error ? error.message : null} {...params} label={label} />}
          />
        )}
      />
    </>
  );
}
