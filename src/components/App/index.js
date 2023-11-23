import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
      <div>
        <Navigation />
  
        <hr />
  
        <Routes> 
            <Route exact path={ROUTES.LANDING} component={LandingPage} /> 
        </Routes>
        <Routes> 
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        </Routes> 
        <Routes> 
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        </Routes>
        <Routes> 
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        </Routes> 
        <Routes> 
            <Route path={ROUTES.HOME} component={HomePage} />
        </Routes> 
        <Routes> 
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        </Routes> 
        <Routes> 
            <Route path={ROUTES.ADMIN} component={AdminPage} />
        </Routes> 
      </div>
    </Router>
  );

export default App;