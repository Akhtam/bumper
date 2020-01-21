import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/rootReducer';

const configureStore = (preloadedState = {}) => {
	return createStore(
		rootReducer,
		preloadedState,
		composeWithDevTools(applyMiddleware(thunk))
	);
};

export default configureStore;
