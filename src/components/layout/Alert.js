import React from 'react';
import PropTypes from 'prop-types';

import { AlertStyle } from '../styles/AlertStyles';

import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <AlertStyle key={alert.id} alertType={alert.alertType}>
      {alert.msg}
    </AlertStyle>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
