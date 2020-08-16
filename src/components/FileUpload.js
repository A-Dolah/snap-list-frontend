import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import FileInput from './FileInput';

import { FileUploadStyle } from './styles/FileUploadStyles';
import { LoaderStyle } from './styles/CreateListStyles';
import {
  StandardButtonStyle,
  RemoveImageButtonStyle,
} from './styles/ButtonStyles';

import { connect } from 'react-redux';
import {
  uploadImage,
  removeDataUri,
  resetSubmittedState,
} from '../redux/actions/image';

export const FileUpload = ({
  dataUri,
  cloudinaryUri,
  submitted,
  uploadImage,
  removeDataUri,
  resetSubmittedState,
}) => {
  useEffect(() => {
    return () => {
      removeDataUri();
      resetSubmittedState();
    };
  }, [removeDataUri, resetSubmittedState]);
  const handleSubmit = () => {
    uploadImage(dataUri);
  };
  if (submitted && cloudinaryUri) {
    return <Redirect to="create-list" />;
  }
  return (
    <Fragment>
      {submitted ? (
        <LoaderStyle>
          <h1>Processing</h1> <SyncLoader color="#1840e3" size={10} />
        </LoaderStyle>
      ) : (
        <FileUploadStyle image={dataUri}>
          {dataUri && (
            <RemoveImageButtonStyle onClick={removeDataUri}>
              Choose Other Image
            </RemoveImageButtonStyle>
          )}
          <div>
            {!dataUri ? <FileInput /> : <img src={dataUri} alt="preview" />}
          </div>
          <StandardButtonStyle
            background="primary"
            color="light"
            onClick={handleSubmit}
            disabled={!dataUri}
            className="image-submit-btn"
          >
            Submit for processing!
          </StandardButtonStyle>
        </FileUploadStyle>
      )}
    </Fragment>
  );
};

FileUpload.propTypes = {
  dataUri: PropTypes.string,
  cloudinaryUri: PropTypes.string,
  isFullscreen: PropTypes.bool,
  uploadImage: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  resetSubmittedState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dataUri: state.image.dataUri,
  cloudinaryUri: state.image.cloudinaryUri,
  submitted: state.image.submitted,
});

export default connect(mapStateToProps, {
  uploadImage,
  removeDataUri,
  resetSubmittedState,
})(FileUpload);
