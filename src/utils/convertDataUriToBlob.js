const convertDataUriToBlob = (dataUri) => {
  const binary = atob(dataUri.split(',')[1]);
  const array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
};

export default convertDataUriToBlob;
