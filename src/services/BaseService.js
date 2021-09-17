import { apiUrl } from "../env/config";

export const baseService = {
  get: async (api) => {
    let responseData;

    await fetch(apiUrl + api)
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      })
      .catch((err) => {
        console.log("err", err);
      });

    return responseData;
  },
};
