import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import AppComponent from './components/AppComponent.jsx';
import './public/css/index.css';


ReactDOM.render(
    <BrowserRouter>

        <React.Fragment>
            <Route path='/' component={AppComponent} />
            
        </React.Fragment>

    </BrowserRouter>
    , document.getElementById('app'));
    //<Login handleUserLogin={this.handleUserLogin} {...props} />