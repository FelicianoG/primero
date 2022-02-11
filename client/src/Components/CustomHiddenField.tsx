import Input from '@mui/material/Input';
import { Controller, useFormContext } from "react-hook-form";

interface CustomTextfieldProps {
  name:string;
}

export default function CustomTextfield({
  name,
}: CustomTextfieldProps) {

  const formContext = useFormContext();
  const { control } = formContext;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input type='hidden' {...field } />}
      />
    </div>
  );
}