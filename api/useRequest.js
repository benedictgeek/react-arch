import axios from "axios";
import { useUserContext } from "../state/contextProviders/userContext";

export let useRequest = () => {
  let { state } = useUserContext();
  let { token } = state;

  let axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const axiosInstance = axios.create();

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      let statusCode;
      statusCode = error.response.status;

      throw error.response;
    }
  );

  let postRequest = async (url, data) => {
    try {
      let response = await axiosInstance.post(url, data, axiosConfig);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  };

  let getRequest = async (url) => {
    try {
      let response = await axiosInstance.get(url, axiosConfig);

      return response.data.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getRequest,
    postRequest,
  };
};
