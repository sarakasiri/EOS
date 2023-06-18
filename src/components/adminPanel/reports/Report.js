import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Report = ({ title, icon }) => {
    return (
        <Box>
            <Grid container xs={12}>
                <Grid item xs={9}>
                    <Grid container xs={12}>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={12}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </Box>
    );
};

export default Report;