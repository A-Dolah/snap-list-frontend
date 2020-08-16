import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LoginStyles } from './styles/LoginStyles';
import {
  FormStyle,
  FormGroupStyle,
  FormInputStyle,
  FormSubmitButtonStyle,
} from './styles/FormStyles';

import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LoginStyles>
      <h1>Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <FormStyle onSubmit={onSubmit}>
        <FormGroupStyle>
          <FormInputStyle
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </FormGroupStyle>
        <FormGroupStyle>
          <FormInputStyle
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
            required
          />
        </FormGroupStyle>
        <FormSubmitButtonStyle
          type="submit"
          value="Login"
          color="light"
          background="primary"
        />
      </FormStyle>
      <p className="my-1 signin-info">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </LoginStyles>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
