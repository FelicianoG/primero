import Rating from "@mui/material/Rating";
import FormLabel from "@mui/material/FormLabel";
import React from "react";
import { useFormContext } from "react-hook-form";

interface CustomRatingProps {
  value: number;

  onParentChange: (e:React.SyntheticEvent<Element,Event>,value:number) => void;
  label: string;
}

export default function CustomRating({
  value,
 
  onParentChange,
  label
}: CustomRatingProps) {

  const formContext = useFormContext();
  const { control } = formContext;

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <br />
      <Rating value={value} onChange={(event, newValue)=>onParentChange(event, newValue!)} />
    </>
  );
}
