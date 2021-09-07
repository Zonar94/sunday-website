import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import homepage from './components/homepage';

function App() {
  return (
    <Router>
      <div className="App">

       
        <Grid display="flex" flexDirection="column" container sm={12}>
          <Grid item sm={12}>
            <Navbar />
          </Grid>

        
          <Grid item sm={12}>
            <homepage/>
          </Grid>

        </Grid>

      </div >
    </Router>


  );
}

export default App;