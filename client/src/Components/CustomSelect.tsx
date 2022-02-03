import Select from "@mui/material/Select";
import { Controller} from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { FormHelperText } from "@mui/material";

type opciones = {
  valor: number;
  label: string;
}

interface CustomSelectHookProps {
  
    opciones:opciones[];
    control:any;
    name:string;
    label:string;
    required?:boolean;
   
}

export default function CustomSelectHook({

    opciones,
    control,
    name, 
    label,
    required,

}: CustomSelectHookProps) {
  
    return (
        <div>
          <Controller
            name={name}
            control={control}
            rules={{required : required ? 'este campo es obligatorio' : undefined}}
            render={({ field, fieldState: {error} }) => 
                <FormControl fullWidth >
                    <InputLabel id="labelId" error={!!error}>{label}</InputLabel>
                    <Select error={!!error} id="labelId" label={label} variant="outlined" {...field} >
                        {opciones.map((opcion, key) => 
                            <MenuItem key={key} value={opcion.valor}>{opcion.label}</MenuItem> )
                        }
                    </Select>
                    <FormHelperText error={!!error}>
                        {error ? error.message : null}
                    </FormHelperText>
                </FormControl>}
            />
          
        </div>
      );
    }