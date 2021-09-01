// Providers
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import MomentUtils from '@date-io/moment';

// Componenets
import App from './App';
import { useThemeMode } from 'hooks/ThemeMode';
import { getTheme } from 'components/Theme';

const AppWrapper = (): JSX.Element => {
  const [theme] = useThemeMode();

  return (
    <MuiThemeProvider theme={getTheme(theme)}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
};

export default AppWrapper;
