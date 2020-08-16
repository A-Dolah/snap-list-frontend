import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const MenuModal = ({ lists, isOpen }) => (
  <ReactModal
    ariaHideApp={false}
    isOpen={isOpen}
    overlayClassName={'menu-modal-overlay'}
    className={'menu-modal'}
  >
    {lists}
  </ReactModal>
);

MenuModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  lists: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isOpen: state.nav.isOpen,
});

export default connect(mapStateToProps)(MenuModal);
