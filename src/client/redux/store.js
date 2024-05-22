import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const createStore = (preloadedState = {}) =>
	configureStore({
		reducer: rootReducer,
		preloadedState,
	});

export default createStore;
