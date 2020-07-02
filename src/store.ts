import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from 'utils/localStorage';
import { throttle } from 'lodash';
import rootReducer from './rootReducer';

const initializeStore = (preloadedState = {}) => {
  preloadedState = loadState();

  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

const store = initializeStore();

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export type AppDispatch = typeof store.dispatch;

export { store };
