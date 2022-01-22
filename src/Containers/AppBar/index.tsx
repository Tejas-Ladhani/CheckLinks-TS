
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeSwitchBtn } from '../../Components';
import React from 'react'
/**
 * AppBar : utilizes the MUI's AppBar and it contains ThemeSwitchBtn component
 */
export default function ButtonAppBar(props: {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'black' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CheckLinks
          </Typography>
          {/* passing the received props to Switch so that, theme can be toggles through switch */}
          <ThemeSwitchBtn dark={props.dark} setDark={props.setDark} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}