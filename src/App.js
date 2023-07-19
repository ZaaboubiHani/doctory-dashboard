import "./App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import Container from "@mui/material/Container";
import { FormData } from 'formdata-node';
const fetch = require('node-fetch');

const ColorButton = styled(Button)(({ theme }) => ({
  width: "40vw",
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700]
  }
}));

function App() {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);
     const formData = new FormData();
      formData.append('image', file);
    try {
      const response = await fetch('https://doctoryqcm.brokerpharm.com/api/upload', {
  method: 'post',
  body: formData,
  headers:  {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg5MTgxMjc3LCJleHAiOjE2OTE3NzMyNzd9.3zzCpd5vstZO__fPeZvPQkP_vgFyG24Bl53TO6OPtFg'
  }
});
    } catch (error) {
      console.log(error);
    }


  };

  return (
    <div>
      <Stack spacing={5} padding={10}>
        <h1>Doctory Dashboard</h1>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{
            width: "40vw",
            height: 'fit-content',
            backgroundColor: "white",
            margin: 0,
            border: "none",
            outline: "none",
            borderRadius: 1,
            boxShadow: "0px 0.7px 0px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              border: "none",
              outline: "none"
            },
            "&:focus": {
              border: "none",
              outline: "none"
            }
          }}
          renderInput={params =>
            <TextField
              {...params}
              sx={{
                border: "none",
                outline: "none",
                "&:hover": {
                  border: "none",
                  outline: "none"
                },
                "&:focus": {
                  border: "none",
                  outline: "none"
                }
              }}
              label="Catégorie"
            />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{
            width: "40vw",
            backgroundColor: "white",
            margin: 0,
            border: "none",
            outline: "none",
            borderRadius: 1,
            boxShadow: "0px 0.7px 0px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              border: "none",
              outline: "none"
            }
          }}
          renderInput={params => <TextField {...params} label="Module" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{
            width: "40vw",
            backgroundColor: "white",
            margin: 0,
            border: "none",
            outline: "none",
            borderRadius: 1,
            boxShadow: "0px 0.7px 0px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              border: "none",
              outline: "none"
            }
          }}
          renderInput={params => <TextField {...params} label="Cours" />}
        />
        <input
        type="file"
        id="file-input"
        accept=".xlsx, .xls"
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
        <Paper
          component="form"
          sx={{ display: "flex", alignItems: "center", width: "40vw" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Importer un fichier excel"
            
            inputProps={{ "aria-label": "search google maps" }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            sx={{ p: "10px", color: purple[500], height: 50 }}
            aria-label="directions"
            onClick={() => document.getElementById('file-input').click()}
          >
            <DownloadIcon />
          </IconButton>
        </Paper>
        <Stack
        direction="row"
        spacing={2}
          sx={{
            p: "0px",
            width: "40vw",
            margin: 0,
            padding: 0,
            height: 50,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'space-between'
          }}
        >
          <ColorButton
            variant="contained"
            sx={{ p: "0px", height: 50, margin: 0, padding: 0 }}
            endIcon={<SendIcon />}
          >
            Préévaluer
          </ColorButton>
          <ColorButton
            variant="contained"
            sx={{ p: "0px", height: 50, margin: 0, padding: 0 }}
            endIcon={<SendIcon />}
          >
            Évaluer
          </ColorButton>
          <ColorButton
            variant="contained"
            sx={{ p: "0px", height: 50, margin: 0, padding: 0 }}
            endIcon={<AddIcon />}
          >
            Ajouter
          </ColorButton>
        </Stack>
      </Stack>
    </div>
  );
}
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977
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
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964
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
    year: 1983
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
    year: 2004
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
  { label: "Monty Python and the Holy Grail", year: 1975 }
];
export default App;
