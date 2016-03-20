import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers/reducers';
// import api from '../middleware/api';

export default function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
  const store = createStoreWithMiddleware(reducer, initialState,
      window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}
