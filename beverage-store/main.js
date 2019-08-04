import ReactDOM from 'react-dom';
import React from 'react';
import  AppComponent  from './components/AppComponent.jsx';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter >
            <AppComponent />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('app'));