import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import './Cards.css';
import CountUP from 'react-countup';


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate,country}}) => {
    if (!confirmed) {
        return 'Loading....'
    }
    return (
        <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className="card" style= {{ borderBottom: "10px solid blue"}} >
                    <CardContent>
                        <Typography style={{color:"blue"}} gutterBottom>{country}</Typography>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5">
                        <CountUP start={0} end={confirmed.value} duration={3.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card" style= {{ borderBottom: "10px solid green"}}>
                    <CardContent>
                        <Typography style={{color:"green"}} gutterBottom>{country}</Typography>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaint="h5">
                        <CountUP start={0} end={recovered.value} duration={3.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card" style= {{ borderBottom: "10px solid red"}}>
                    <CardContent>
                        <Typography style={{color:"red"}} gutterBottom>{country}</Typography>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint="h5">
                        <CountUP start={0} end={deaths.value} duration={3.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cards;