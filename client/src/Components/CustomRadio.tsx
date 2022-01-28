import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

interface CustomRadioProps {
  groupTitle: string;
  radioOptions: string[];
  handleRadio: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
 
}

export default function CustomRadio({
  groupTitle,
  radioOptions,
  handleRadio,
  value,
 
}: CustomRadioProps) {
  
  const RadioOption = (radioOptions: string[]) => {
    return radioOptions.map((rad:string, i:number) => {
      return (
        <FormControlLabel value={rad} key={i} control={<Radio/>} label={rad} />
      );
    });
  };

  return (
    <div className="group">
      <FormLabel>{groupTitle}</FormLabel>
      <RadioGroup
        aria-label="estadoCivil"
        defaultValue="Soltero"
        name="radio-buttons-group"
        onChange={(e) => {
          handleRadio(e);
        }}
      >
        {RadioOption(radioOptions)}
      </RadioGroup>
    </div>
  );
}
