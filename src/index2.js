import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './App.css'
import {createStore} from 'redux'
import reducer from './MultipleCounters/reducer'
import App from './MultipleCounters/App'

let store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)