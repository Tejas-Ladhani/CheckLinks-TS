import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import style from './style.module.css';
import axios from "axios";
const greenDotPath = "/assets/greenDot.png";
const redDotPath = "/assets/redDot.png";

export default function Tile(props: { icon: string; name: string }) {
    const [isLive, setisLive] = useState<boolean>();
    const CheckStatus = (): void => {
        axios({
            method: 'get',
            url: `https://app.subsocial.network/subid/api/v1/check/${(props.name).toLowerCase()}`,
            headers: {}
        })
            .then(function (response) {
                // console.log(props.name)
                // console.log(response.data);
                setisLive(response.data)
                setInterval(() => { CheckStatus() }, 30000);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    useEffect(() => {
        CheckStatus()
        //  check the Status
        // save the state
        //   start the timer of 5 minutes 
        //   update the state
        // change the icon according to change.
    }, []);

    console.log(props)
    return <div className={style.Tile}>
        <Grid item xs={4} className={style.imageContainer}>
            <img src={`https://sub.id/images/${props.icon}`} />
        </Grid>
        <Grid item xs={6} >
            <Typography variant="h5" component="h4">{props.name} </Typography>
        </Grid>
        <Grid item xs={2}>
            <div className={style.indicatorImage}>
                <img src={isLive ? greenDotPath : redDotPath} />
                <p>

                    {isLive ? 'Up' : 'Down'}

                </p>
            </div>
        </Grid>
    </div>;
}

