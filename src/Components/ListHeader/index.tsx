import { Grid } from "@mui/material";
import style from './style.module.css'

export default function ListHeader() {
    return <div className={style.container}>
        <div className={style.ListHeader}>
            <Grid item xs={4} className={style.imageContainer}>
                <h4>Icon</h4>
            </Grid>
            <Grid item xs={6} >
                <h4>Name</h4>
            </Grid>
            <Grid item xs={2}>
                <h4>Status</h4>
            </Grid>
        </div>
    </div>;
}
