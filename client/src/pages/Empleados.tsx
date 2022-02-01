import React from "react";
import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import "../style.css";
import Button from "@mui/material/Button";
import CustomRadio from "../components/CustomRadio";
import useCustomForm from "../hooks/useCustomForm";
import CustomTextField from "../components/CustomTextField";
import CustomCheckbox from "../components/CustomCheckbox";
import CustomSelect from "../components/CustomSelect";
import Grid from "@mui/material/Grid";
import CustomTextArea from "../components/CustomTextArea";
import CustomRating from "../components/CustomRating";
import { FormControl } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomAutocompleteHook from "../components/CustomAutocompleteHook";

type Empleado = {
  firstName: string;
  lastName: string;
  rangoEdad: 10 | 20 | 30 | "";
  pelicula: string | null;
  areaTexto:string;
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const peliculas = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];

export default function Empleado() {
  const [state, setState] = useCustomForm();
  const { control, handleSubmit } = useForm<Empleado>({
    defaultValues: {
      firstName: "",
      lastName: "",
      rangoEdad: "",
      pelicula: null,
      areaTexto:"",
    },
  });

  const onSubmit = (data: Empleado) => { console.log(JSON.stringify(data, null, 2))}

  function handleCheck(e: React.ChangeEvent<HTMLInputElement>, value: string) {
    setState({ ...state, [value]: e.target.checked });
  }

  function handleAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>, text: string) {
    setState({ ...state, [text]: e.target.value });
  }

  function handleRating(e: React.SyntheticEvent<Element, Event>, value: number) {
    setState({ ...state, rating: value });
  }

  function handleRadio(e: React.ChangeEvent<HTMLInputElement>) {
    setState({ ...state, estadoCivil: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="cardo">
          <Grid container spacing={2} marginLeft={6}>
            <Grid item xs={8}>
              <FormLabel className="titulo">Forma de empleo</FormLabel>
            </Grid>

            <Grid item xs={8}>
              <CustomSelect
                opciones={[
                  { valor: 10, label: "diez" },
                  { valor: 20, label: "veinte" },
                  { valor: 30, label: "treinta" },
                ]}
                control={control}
                name="rangoEdad"
                label="Rango de Edad"
              />
            </Grid>

            <Grid item xs={8}>
              <CustomTextField control={control} name="firstName" label="Nombre" />
            </Grid>

            <Grid item xs={8}>
              <CustomTextField control={control} name="lastName" label="Apellido" />
            </Grid>

            <Grid item xs={8}>
              <CustomAutocompleteHook control={control} name="pelicula" label="Peliculas" options={peliculas} required={true} />
            </Grid>

            <Grid item xs={8}>
              <CustomRating label="Calidad" value={state.rating} onParentChange={handleRating} />
            </Grid>

            <Grid item xs={8}>
              <CustomTextArea
                control={control}
                name="areaTexto"
                label="Comentarios"
                estado={state.area}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleAreaChange(e, "area")}
              />
            </Grid>

            <Grid item xs={8}>
              <CustomRadio
                required={true}
                groupTitle="Estado Civil"
                radioOptions={["Soltero", "Casado", "Divorciado"]}
                handleRadio={handleRadio}
                value={state.estadoCivil}
              />
            </Grid>
            <Grid item xs={8}>
              <FormControl required={true}>
                <FormLabel>Tecnologias: Elige al menos 2</FormLabel>
                <CustomCheckbox label="React" checked={state.tecReact} onChanges={handleCheck} value="tecReact" />
                <CustomCheckbox label="Python" checked={state.tecPython} onChanges={handleCheck} value="tecPython" />
                <CustomCheckbox label="Typescript" checked={state.tecTypescript} onChanges={handleCheck} value="tecTypescript" />
              </FormControl>
            </Grid>

            <Grid item xs={8}>
              <input type="file" />
            </Grid>
            <br />
            <Grid item xs={8}>
              <Button
                type="submit"
                variant="outlined"
                //onClick={handleSubmitReact}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Card>
      </form>
    </div>
  );
}
