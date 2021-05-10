import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './store';

import { HashRouter } from 'react-router-dom';
import { ThemeModeProvider } from 'hooks/ThemeMode';

const ROOT_COMPONENT = 'root';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ThemeModeProvider>
          <App />
        </ThemeModeProvider>
      </HashRouter>
    </Provider>
  </StrictMode>,
  document.getElementById(ROOT_COMPONENT),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
