import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import HamburgerMenu from 'react-hamburger-menu';
import MenuModal from './MenuModal';
import { NavbarStyles } from '../styles/NavbarStyles';

import debounce from 'lodash/debounce';
import getWidth from '../../utils/getWidth';

import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { setWidth } from '../../redux/actions/general';
import { openHamburgerMenu, closeHamburgerMenu } from '../../redux/actions/nav';

const Navbar = ({
  auth: { isAuthenticated, loading },
  logout,
  isOpen,
  openHamburgerMenu,
  closeHamburgerMenu,
  width,
  setWidth,
}) => {
  useEffect(() => {
    setWidth(getWidth());
    const resizeListener = debounce(() => {
      setWidth(getWidth());
    }, 100);
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [setWidth]);

  const handleClick = () => {
    closeHamburgerMenu();
  };

  const authLinks = (
    <ul className="auth-links">
      {width <= 700 && (
        <Link to="/dashboard" onClick={handleClick}>
          Home
        </Link>
      )}
      <Link to="/upload" onClick={handleClick}>
        {width > 700 ? (
          <div className="add-icon">
            <BsFillPlusSquareFill style={{ width: '25px', height: '25px' }} />
          </div>
        ) : (
          'New List'
        )}
      </Link>
      <Link to="/lists" onClick={handleClick}>
        All Lists
      </Link>
      <a
        className="logout-link"
        onClick={() => {
          logout();
          closeHamburgerMenu();
        }}
        href="#!"
      >
        Logout
      </a>
    </ul>
  );

  const guestLinks = (
    <ul className="guest-links">
      <Link to="/register" onClick={handleClick}>
        Register
      </Link>
      <Link to="/login" onClick={handleClick}>
        Sign In
      </Link>
    </ul>
  );

  const handleHamburger = () => {
    if (isOpen) {
      closeHamburgerMenu();
      return;
    }
    openHamburgerMenu();
  };

  return (
    <NavbarStyles>
      <h2>
        <Link to="/">
          <i className="fas fa" /> Snap List
        </Link>
      </h2>
      {!loading && width > 700 && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
      {width <= 700 && (
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={handleHamburger}
          width={36}
          height={30}
          strokeWidth={2}
          rotate={0}
          color="#1840e3"
          borderRadius={5}
          animationDuration={0.3}
        />
      )}
      <MenuModal
        ariaHideApp={false}
        lists={isAuthenticated ? authLinks : guestLinks}
      />
    </NavbarStyles>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  openHamburgerMenu: PropTypes.func.isRequired,
  closeHamburgerMenu: PropTypes.func.isRequired,
  setWidth: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isOpen: state.nav.isOpen,
  width: state.general.width,
});

export default connect(mapStateToProps, {
  logout,
  openHamburgerMenu,
  closeHamburgerMenu,
  setWidth,
})(Navbar);
