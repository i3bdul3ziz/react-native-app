import { configureStore } from '@reduxjs/toolkit';
import { setFirstClickedItem } from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import "regenerator-runtime/runtime";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: setFirstClickedItem,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);