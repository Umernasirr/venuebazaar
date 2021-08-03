import { api } from "./apiServices";
import { Store } from "./store";
export const service = {
  login: (data) => {
    return api.invoke("POST", `auth/login`, data);
  },
  register: (data) => {
    return api.invoke("POST", `auth/register`, data);
  },
};
