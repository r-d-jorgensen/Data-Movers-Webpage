const serverEndpoint = ((!process.env.NODE_ENV || process.env.NODE_ENV === 'development') && process.env.DEPLOYED === "false")
  ? `http://localhost:4000`
  : process.env.REACT_APP_PRODUCTION_ENDPOINT;

export default serverEndpoint;