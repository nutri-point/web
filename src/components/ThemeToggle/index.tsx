import { IconButton, Tooltip, Zoom } from '@mui/material';
import { RiSunLine as SunIcon, RiMoonFill as MoonIcon } from 'react-icons/ri';

import { ThemeMode, useThemeMode } from 'hooks/ThemeMode';

const ThemeToggle = () => {
  const [theme, toggleTheme] = useThemeMode();

  return (
    <Tooltip TransitionComponent={Zoom} title="Tema">
      <IconButton
        aria-label="toggle theme"
        color="inherit"
        onClick={toggleTheme}
      >
        {theme === ThemeMode.Light ? <SunIcon /> : <MoonIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
