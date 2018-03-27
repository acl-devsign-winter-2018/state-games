import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { user } from './components/reducers';
import thunk from 'redux-thunk';


const reducer = combineReducers({
  user
});


const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;