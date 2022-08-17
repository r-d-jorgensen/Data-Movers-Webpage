const serverEndpoint = process.env.NODE_ENV === 'development'
  ? `https://localhost:4000`
  : process.env.REACT_APP_PRODUCTION_ENDPOINT;

export default serverEndpoint;