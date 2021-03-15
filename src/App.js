import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Learn from './pages/Learn';
import SuccessPage from './pages/SuccessPage';
import Profile from './pages/Profile';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { UserProvider } from './states/userState';
import AuthRoute from './components/AuthRoute';
import Questionnaire from './pages/Questionnaire';

const NoMatchPage = () => {
  return (
    <div
      style={{ textAlign: 'center', minHeight: 'calc(100vh - 87px - 127px)' }}
    >
      <h3 style={{ paddingTop: '3rem' }}>404 - Not found</h3>
    </div>
  );
};

const App = () => {
  return (
    <UserProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/log-in'>
            <LogIn />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <AuthRoute path='/questionnaire' component={Questionnaire} />
          <Route path='/learn'>
            <Learn />
          </Route>
          <Route path='/success/:score'>
            <SuccessPage />
          </Route>
          <AuthRoute path='/profile' component={Profile} />
          <Route component={NoMatchPage} />
        </Switch>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
