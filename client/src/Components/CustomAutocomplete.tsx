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
  required?: boolean; 
  options: OptionItem[];
}

export default function CustomAutocompleteHook({
  name,
  label,
  control,
  required,
  options,

}: AutocompleteHookProps) {
  
  const [inputValue, setInputValue] = React.useState('');

  return (
    <>
    <Controller
        name={name}
        control={control}
        rules={{required: required ? "este campo es obligatorio" : undefined }}
        render={({ field, fieldState:{error} }) => 
        
            <Autocomplete

              id={name}
              {...field}
              onChange={(e,newValue:OptionItem)=>{field.onChange(newValue)}}
              isOptionEqualToValue={(option, value) => {return JSON.stringify(option) === JSON.stringify(value)}}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField error={!!error} helperText={error ? error.message : null} {...params} label={label} />}
            />
      }
      />
    </>
  );
}
