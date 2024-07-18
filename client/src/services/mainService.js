import { api, backendEndpoint } from "../config";

const getCurrentTasks = async () => {
  const res = await api.get(`${backendEndpoint}/getCurrentTasks`);
  if (res.status === 200) {
    return res.data;
  } else {
    return { message: "Something went wrong", status: res.status };
  }
};

const getArchivedTasks = async () => {
  const res = await api.get(`${backendEndpoint}/getArchivedTasks`);
  if (res.status === 200) {
    return res.data;
  } else {
    return { message: "Something went wrong", status: res.status };
  }
};

const getMostRecentID = async () => {
  const res = await api.get(`${backendEndpoint}/getMostRecentID`);
  if (res.status === 200) {
    return res.data.id;
  } else {
    return { message: "Something went wrong", status: res.status };
  }
};

const addNewTask = async (text) => {
  const params = {
    text: text,
  };
  const res = await api.post(`${backendEndpoint}/addTask`, params);
  if (res.status === 200) {
    return res;
  } else {
    return { message: "Something went wrong", status: res.status };
  }
};

export { getCurrentTasks, getArchivedTasks, getMostRecentID, addNewTask };
