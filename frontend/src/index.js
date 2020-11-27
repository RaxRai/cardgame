import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/game';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LoginPage from './components/loginPage';

ReactDOM.render(

      <BrowserRouter>
        <Switch>
          <Route  path='/game' component={Game}/>
          <Route  path='/login' component={LoginPage}/>
          <Route  path='/' component={Game}/>
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
 ,
  document.getElementById('root')
);
