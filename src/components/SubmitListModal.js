import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { StandardButtonStyle } from './styles/ButtonStyles';

import { connect } from 'react-redux';
import { submitList } from '../redux/actions/list';

const SubmitListModal = ({
  pickedIngredients,
  submittingList,
  toSubmitList,
  submitList,
  submitted,
  cloudinaryUri,
}) => {
  const [listName, setListName] = useState('');
  const onChange = (e) => {
    setListName(e.target.value);
  };
  const onSubmit = () => {
    submitList(listName, pickedIngredients, cloudinaryUri);
  };
  if (submitted) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Modal
      ariaHideApp={false}
      isOpen={!!submittingList}
      onRequestClose={() => toSubmitList(false)}
      contentLabel="List Name"
      closeTimeoutMS={200}
      className="modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(52, 58, 64, 0.75)',
        },
      }}
    >
      <h3 className="moodal__title">Name List</h3>
      <input
        type="text"
        className="modal__input"
        onChange={onChange}
        value={listName}
      />
      <StandardButtonStyle
        disabled={!listName}
        onClick={onSubmit}
        color="light"
        background="primary"
      >
        Save List!
      </StandardButtonStyle>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  submittingList: state.list.submittingList,
  submitted: state.list.submitted,
  pickedIngredients: state.ingredients.pickedIngredients,
  cloudinaryUri: state.image.cloudinaryUri,
});

SubmitListModal.propTypes = {
  pickedIngredients: PropTypes.array,
  submitted: PropTypes.bool.isRequired,
  submittingList: PropTypes.bool.isRequired,
  toSubmitList: PropTypes.func.isRequired,
  submitList: PropTypes.func.isRequired,
  cloudinaryUri: PropTypes.string,
};

export default connect(mapStateToProps, { submitList })(SubmitListModal);
