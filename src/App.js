import logo from "./logo.svg";
import "./App.css";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from '@material-ui/core/Checkbox';
import FormContorlLabel from '@material-ui/core/FormControlLabel';
import { useState } from "react";

function CheckBoxExample(){
  const [checked, setChecked] = useState(true);
  return(
    <FormContorlLabel control={ <Checkbox
      checked={checked}
      onChange={(e)=>setChecked(e.target.checked)}
      color="primary"
      inputProps={{'aria-label':'secondary checkbox'}}
      />}
      label="Testing Checkbox" />
     
    
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckBoxExample/>
        <ButtonGroup 
            color="primary" variant="contained">
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
  );
}

export default App;
