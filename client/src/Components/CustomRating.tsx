import Rating from "@mui/material/Rating";
import FormLabel from "@mui/material/FormLabel";
import React from "react";

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
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <br />
      <Rating value={value} onChange={(event, newValue)=>onParentChange(event, newValue!)} />
    </>
  );
}
