import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from 'sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f,
  ),
);

export default store;

sagaMiddleware.run(rootSaga);
