import React from "react";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from './reducers/rootReducer'
import AsyncGifs from './components/AsyncGifs'
import { inputChange, elementsChange } from './actions/inputActions'
import { fetchGifs } from './actions/gifsActions'

const mapStateToProps = state => ({
    value: state.value,
    elements: state.elements,
    urls: state.urls,
    status: state.status   
})

const Container = connect(mapStateToProps, {
    inputChange,
    elementsChange,
    fetchGifs
})(AsyncGifs)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

