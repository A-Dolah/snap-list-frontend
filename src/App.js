import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Routes from './components/routing/Routes';
import checkAuthToken from './utils/checkAuthToken';

import { GlobalStyles } from './components/styles/GlobalStyles';
import { AppLayoutStyles } from './components/styles/AppLayoutStyles';

const ScrollToTop = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);
  return props.children;
};

const App = () => {
  useEffect(() => {
    checkAuthToken(localStorage.token);
  }, []);
  return (
    <Router>
      <AppLayoutStyles>
        <GlobalStyles />
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </AppLayoutStyles>
    </Router>
  );
};

export default App;
