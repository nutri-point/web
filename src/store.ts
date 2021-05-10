import { createStore } from 'redux';
import rootReducer from 'reducers';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
