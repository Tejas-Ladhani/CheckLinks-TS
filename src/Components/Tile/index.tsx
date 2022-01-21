import { Grid, Typography } from "@mui/material";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import style from './style.module.css';

const greenDotPath = "/assets/greenDot.png";
const redDotPath = "/assets/redDot.png";

export default function Tile(props: { icon: string; name: string }) {
    console.log(props)
    return <div className={style.Tile}>
        <Grid item xs={4} className={style.imageContainer}>
            <img src={`https://sub.id/images/${props.icon}`} />
        </Grid>
        <Grid item xs={4} >
            <Typography variant="h5" component="h4">{props.name} </Typography>
        </Grid>
        <Grid item xs={4}>
            <div className={style.indicatorImage}>
                <img src={redDotPath} />
                <p>

                    UP

                </p>
            </div>
        </Grid>
    </div>;
}

