import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Controller, useFormContext } from "react-hook-form";

interface CustomCheckboxProps {
  name: string;
  onChanges: (e:React.ChangeEvent<HTMLInputElement>,value:boolean) => void;
  value:boolean;
  
}

export default function CustomCheckbox({
  name,
  onChanges,
  value
}: CustomCheckboxProps) {

  const formContext = useFormContext();
  const { control } = formContext;
  

  return (
      <>
        <Controller
          name={name}
          control={control}
          render={({ field }) =>
            <Checkbox onChange={(e)=>{onChanges(e,value)}}  />}
        />
      </>
  );
}
