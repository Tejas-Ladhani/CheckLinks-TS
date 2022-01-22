import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import style from './style.module.css';
import axios from "axios";

// storing the path of PNGs of green & red symbol.
const greenDotPath = "assets/greenDot.png";
const redDotPath = "assets/redDot.png";

export default function Tile(props: { icon: string; name: string }) {

    // State to save the "state"/status of the link
    const [isLive, setIsLive] = useState<boolean>();

    const CheckStatus = (): void => {
        /**
        * check the Status.
        * save the state.
        * start the timer of 5 minutes. 
        * after 5 minutes, checkStatus.
        * & Repeat.
        */
        axios({
            method: 'get',
            url: `https://app.subsocial.network/subid/api/v1/check/${(((props.name).split(" "))[0]).toLowerCase()}`,
            headers: {}
        })
            .then(function (response) {
                setIsLive(response.data)
                // after 5 minutes, calling the function again.
                setTimeout(() => { CheckStatus() }, 60000);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        CheckStatus()
    }, []);

    return <div className={style.Tile}>
        <Grid container>
            <Grid item xs={4} className={style.imageContainer}>
                <img src={`https://sub.id/images/${props.icon}`} />
            </Grid>
            <Grid item xs={6} >
                <Typography variant="h5" component="h4">{props.name} </Typography>
            </Grid>
            <Grid item xs={2}>
                <div className={style.indicatorImage}>
                    {/* if Live : greenDot else RedDot */}
                    <img src={isLive ? greenDotPath : redDotPath} />

                    {/* if Live : up else Down */}
                    <p>  {isLive ? 'Up' : 'Down'}</p>
                </div>
            </Grid>
        </Grid>
    </div>;
}

