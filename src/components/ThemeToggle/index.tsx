import { IconButton, Tooltip, Zoom } from '@material-ui/core';
import { HiSun as SunIcon, HiOutlineMoon as MoonIcon } from 'react-icons/hi';

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
