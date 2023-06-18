import React from 'react';

import './styles/App.css';

import AppRouter from '../routes/router/AppRouter';
import ReactSidebar from '../components/global/Sidebar';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';

import FinalCheck from '../components/application/finalCheck/FinalCheck';
import SingleApply from '../components/application/singleApply/SingleApply';
import Header from '../components/adminPanel/global/header/Header';

import Report from '../components/adminPanel/reports/Report';

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
        // <SingleApply />
        // <Report />
    );
}

export default App;
