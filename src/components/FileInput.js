import React, { Fragment } from 'react';
import convertReaderToDataUri from '../utils/convertReaderToDataUri';

import { FileInputStyle } from './styles/FileUploadStyles';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDataUri } from '../redux/actions/image';

const FileInput = ({ setDataUri }) => {
  const handleFile = async (e) => {
    const file = e.target.files[0];
    const uriString = await convertReaderToDataUri(file);
    setDataUri(uriString);
  };

  return (
    <Fragment>
      <p className="lead text-primary">
        Choose a File To Upload <br /> to Our AI!
      </p>
      <FileInputStyle type="file" name="file" id="file" onChange={handleFile} />
      <label htmlFor="file">Upload</label>
    </Fragment>
  );
};

FileInput.propTypes = {
  setDataUri: PropTypes.func.isRequired,
};

export default connect(null, { setDataUri })(FileInput);
