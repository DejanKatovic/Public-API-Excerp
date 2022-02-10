import axios, { AxiosRequestHeaders } from "axios";

export const getApiClient = () => {
  return axios.create({
    headers: {
      "content-type": "application/json",
    },
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  });
};
