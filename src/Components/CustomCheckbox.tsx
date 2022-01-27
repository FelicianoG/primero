import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  onChanges: (e:React.ChangeEvent<HTMLInputElement>,value:string) => void;
  value:string;
  
}

export default function CustomCheckbox({
  label,
  checked,
  onChanges,
  value
}: CustomCheckboxProps) {
  

  return (
    <div>
      <>
        <FormControlLabel
          label={label}
          control={
            <Checkbox onChange={(e)=>{onChanges(e,value)}}  />
          }
        />
      </>
    </div>
  );
}
