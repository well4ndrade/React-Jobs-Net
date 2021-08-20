import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
}));

export default function LoginComponent() {
    const classes = useStyles()
    

   

    return (
        <div className={classes.root}>

            <Paper>

            </Paper>
  
        </div>
    );
}
