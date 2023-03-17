import { configureStore } from '@reduxjs/toolkit';
import { reducerHandler } from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import "regenerator-runtime/runtime";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: reducerHandler,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);