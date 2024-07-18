import _axios from "axios";

const REACT_APP_API_URL = "http://localhost:8000";
const PYTHON_SERVER_URL = "http://0.0.0.0:8001";
const handleRes = (res) => {
  return res;
};

const handleErr = (err) => {
  console.log(err);
  return err;
};

const api = _axios.create({ withCredentials: true });
api.interceptors.request.use(handleRes, handleErr);
api.interceptors.response.use(handleRes, handleErr);

const backendEndpoint = "http://localhost:8080";

export { api, backendEndpoint };
