import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { pokemonsReducer } from './reducers/Pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { featuring, logger, prefix } from './middlewares';
import 'antd/dist/reset.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhacers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring, prefix)
)

const store = createStore(pokemonsReducer,composedEnhacers);

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

