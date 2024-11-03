import axios from "axios";

export const AxiosCreate = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "*/*",
    },
});