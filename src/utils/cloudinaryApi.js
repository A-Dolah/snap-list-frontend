const cloudinaryRequest = (body) => {
  return new Request(process.env.REACT_APP_CLOUDINARY_URL, {
    method: 'POST',
    body,
  });
};

export default cloudinaryRequest;
