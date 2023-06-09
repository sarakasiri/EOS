import React from 'react';

import './styles/App.css';

import AppRouter from '../routes/router/AppRouter';
import ReactSidebar from '../components/global/Sidebar';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';

const App = () => {
    return (
        <Grid container xs={12} className="App">
            <Grid item xs={2} >
                <ReactSidebar />
            </Grid>
            <Grid xs={9} >
                <AppRouter />
            </Grid>
        </Grid>
    );
}

export default App;
