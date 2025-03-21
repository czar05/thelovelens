import ServerResponse from '../helpers/server-response.js';
function ErrorHandler (error, req, res, next) {
  ServerResponse.sendInvalidRequest(res, error);
}

export default ErrorHandler;
