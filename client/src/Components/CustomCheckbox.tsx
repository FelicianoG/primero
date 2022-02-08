import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Controller } from "react-hook-form";

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  name: string;
  control: any;
  onChanges: (e:React.ChangeEvent<HTMLInputElement>,value:boolean) => void;
  value:boolean;
  
}

export default function CustomCheckbox({
  label,
  checked,
  name,
  control,
  onChanges,
  value
}: CustomCheckboxProps) {
  

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
