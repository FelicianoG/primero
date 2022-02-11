import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useFormContext } from "react-hook-form";

interface CustomRadioProps {
  groupTitle: string;
  radioOptions: string[];
  handleRadio: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
 
}

export default function CustomRadio({
  groupTitle,
  radioOptions,
  handleRadio,
  required,
 
}: CustomRadioProps) {
  
  const RadioOption = (radioOptions: string[]) => {

    const formContext = useFormContext();
    const { control } = formContext;

    return radioOptions.map((rad:string, i:number) => {
      return (
        <FormControlLabel value={rad} key={i} control={<Radio required={required}/>} label={rad} />
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
