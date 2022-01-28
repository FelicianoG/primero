import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";

interface CustomTextAreaProps {
  label: string;
  estado: string;
  required: boolean;

  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function CustomTextArea({
  label,
  estado,
  required,

  onChange
}: CustomTextAreaProps) {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <TextField
      
        required={required}
        sx={{ width: 250 }}
        multiline
        rows={4}
        onChange={onChange}
        value={estado}
 
      />
    </>
  );
}
