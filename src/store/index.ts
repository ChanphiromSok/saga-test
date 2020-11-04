import {configureStore,createImmutableStateInvariantMiddleware} from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './root-reducer';
import rootSaga from './root-saga';


const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
  ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],
})
const sagaMiddleware  = createSagaMiddleware();


export const store = configureStore({
  reducer:rootReducer,
  middleware:[immutableInvariantMiddleware,sagaMiddleware]
})

sagaMiddleware.run(rootSaga);