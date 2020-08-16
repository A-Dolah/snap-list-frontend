import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { SignupStyles } from './styles/SignupStyles';
import {
  FormStyle,
  FormGroupStyle,
  FormInputStyle,
  FormSubmitButtonStyle,
} from './styles/FormStyles';

import { connect } from 'react-redux';
import { setAlert } from '../redux/actions/alert';
import { register } from '../redux/actions/auth';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <SignupStyles>
      <h1>Register</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <FormStyle onSubmit={onSubmit}>
        <FormGroupStyle>
          <FormInputStyle
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </FormGroupStyle>
        <FormGroupStyle>
          <FormInputStyle
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </FormGroupStyle>
        <FormGroupStyle>
          <FormInputStyle
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </FormGroupStyle>
        <FormGroupStyle>
          <FormInputStyle
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </FormGroupStyle>
        <FormSubmitButtonStyle
          type="submit"
          value="Register"
          color="light"
          background="primary"
        />
      </FormStyle>
      <p className="my-1 signup-info">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </SignupStyles>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
