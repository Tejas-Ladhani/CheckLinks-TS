import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

export default function ThemeSwitchBtn(props: {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [toggle, setToggle] = useState<boolean>(props.dark);
    return <Switch sx={{ m: 1 }} defaultChecked  onChange={() => {props.setDark(!(props.dark));setToggle(!toggle)}} />;
}
