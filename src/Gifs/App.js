import React from "react";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from './reducers/rootReducer'
import AsyncGifs from './components/AsyncGifs'
import { inputChange, numberOfElemntsChange } from './actions/inputActions'
import { fetchGifs } from './actions/gifsActions'

const mapStateToProps = state => ({
    value: state.value,
    numberOfElemnts: state.numberOfElemnts,
    status: state.status,
    urls: state.urls
})

const Container = connect(mapStateToProps, {
    inputChange,
    numberOfElemntsChange,
    fetchGifs
})(AsyncGifs)

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

