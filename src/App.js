import logo from "./logo.svg";
import "./App.css";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormContorlLabel from "@material-ui/core/FormControlLabel";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "@fontsource/roboto";

let theme = createTheme({
  
});

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white !important",
    height: 48,
    padding: "5px 30px !important",
  },
});
function ButtonStyled() {
  const classes = useStyles();
  return (
    <Button
      className={classes.root}
      style={{ borderRadius: 25, marginBottom: 15, border: 0 }}
    >
      Test Styled Button
    </Button>
  );
}

function CheckBoxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormContorlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      }
      label="Testing Checkbox"
      color="secondary"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="App">
          <header className="App-header">

            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Themeing
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>

            <Typography variant="h2">Welcome to MUI</Typography>
            <Typography variant="subtitle1">
              learn how to use Material Ui
            </Typography>

            <ButtonStyled />

            <Grid container spacing={4} justifyContent={"center"}>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>

            <CheckBoxExample />

            <ButtonGroup color="primary" variant="contained">
              <Button
                href="#"
                startIcon={<SaveIcon />}
                onClick={() => {
                  alert("Saved");
                }}
              >
                Save
              </Button>
              <Button
                href="#"
                startIcon={<DeleteIcon />}
                onClick={() => {
                  alert("Discarded");
                }}
              >
                Discard
              </Button>
            </ButtonGroup>

            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
