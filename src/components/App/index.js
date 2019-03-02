import React from 'react';


//Router
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

//Import Components
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import AccountPage from '../Account';
import HomePage from '../Home';
import AdminPage from '../Admin';
import PasswordForgetPage from '../PasswordForget'

//Import Routes
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
    <Router>
        <div>
            <Navigation />
            <hr />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.ADMIN} component={AdminPage} />
            <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        </div>
    </Router>
)

export default withAuthentication(App);