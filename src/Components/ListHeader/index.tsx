import { Grid, Typography } from "@mui/material";
import style from './style.module.css'
export default function ListHeader() {
    return <div className={style.ListHeader}>
        <Grid item xs={4} className={style.imageContainer}>
            <span>Icon</span>
        </Grid>
        <Grid item xs={6} >
            <Typography variant="h5" component="h4">Name</Typography>
        </Grid>
        <Grid item xs={2}>
           <span>Status</span>
        </Grid>
    </div>;
}
