import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { LandingStyles } from '../styles/LandingStyles';
import { LinkButtonStyle } from '../styles/ButtonStyles';
import backgroundImg from '../../images/landing.jpg';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LandingStyles img={backgroundImg}>
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>Snap List</h1>
          <p className="lead">
            Create you grocery shopping lists from photos of food!
          </p>
          <div className="landing-btns">
            <LinkButtonStyle
              to="/register"
              color="light"
              background="primary"
              border="light"
            >
              Sign Up
            </LinkButtonStyle>
            <LinkButtonStyle
              to="/login"
              color="primary"
              background="light"
              border="primary"
            >
              Login
            </LinkButtonStyle>
          </div>
        </div>
      </div>
    </LandingStyles>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
