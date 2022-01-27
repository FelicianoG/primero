import Select from "@mui/material/Select";
import { Controller} from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

type opciones = {
  valor: number;
  label: string;
}

interface CustomSelectHookProps {
  
    opciones:opciones[];
    control:any;
    name:string;
    required:boolean;
    label:string;
   
}

export default function CustomSelectHook({

    opciones,
    control,
    name,
    required,
    label,

}: CustomSelectHookProps) {
  
    return (
        <div>
          <Controller
            name={name}
            control={control}
            render={({ field }) => 
                <FormControl fullWidth >
                    <InputLabel id="labelId">{label}</InputLabel>
                    <Select required={required} id="labelId" label={label} variant="outlined" {...field} >
                        {opciones.map((opcion, key) => 
                            <MenuItem key={key} value={opcion.valor}>{opcion.label}</MenuItem> )
                        }
                    </Select>
                </FormControl>}
            />
          
        </div>
      );
    }