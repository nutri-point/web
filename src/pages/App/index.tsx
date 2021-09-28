// Providers
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

// Componenets
import App from './App';
import { useThemeMode } from 'hooks/ThemeMode';
import { getTheme } from 'components/Theme';

const AppWrapper = (): JSX.Element => {
  const [theme] = useThemeMode();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={getTheme(theme)}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <App />
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default AppWrapper;
