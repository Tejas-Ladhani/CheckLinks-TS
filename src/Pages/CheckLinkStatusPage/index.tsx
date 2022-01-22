import { ThemeProvider } from "@emotion/react";
import { createTheme, Paper } from "@mui/material";
import { useState } from "react";
import { AppBar, List } from "../../Containers";

export default function CheckLinkStatusPage() {
    // state for theme
    const [dark, setDark] = useState<boolean>(false)

    const theme = createTheme({
        palette: {
            mode: dark ? 'dark' : 'light',
        },
    })

    return (
        <div className="App">
            <ThemeProvider theme={theme}>

                <Paper style={{ height: '100vh' }} >

                    <AppBar dark={dark} setDark={setDark} />
                    <List />

                </Paper>
            </ThemeProvider>
        </div>
    );
}
