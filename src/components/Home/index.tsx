import { Grid, IconButton, Tooltip, Zoom } from '@material-ui/core';
import SunIcon from '@material-ui/icons/WbSunny';
import MoonIcon from '@material-ui/icons/NightsStay';

import { ThemeMode, useThemeMode } from 'hooks/ThemeMode';

interface Props {}

const Home = (): JSX.Element => {
  const [theme, toggleTheme] = useThemeMode();

  return (
    <div>
      <Grid item>
        <Tooltip TransitionComponent={Zoom} title="Tema">
          <IconButton
            aria-label="toggle theme"
            color="inherit"
            onClick={toggleTheme}
          >
            {theme === ThemeMode.Light ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </Tooltip>
      </Grid>
    </div>
  );
};

export default Home;
