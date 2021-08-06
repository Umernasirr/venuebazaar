import { api } from "./apiServices";
import { Store } from "./store";
export const service = {
  login: (data) => {
    return api.invoke("POST", `auth/login`, data);
  },
  register: (data) => {
    return api.invoke("POST", `auth/register`, data);
  },
  getVenues: () => {
    return api.invoke("GET", `venue/`);
  },
  addVenue: (data) => {
    return api.uploadFormData("POST", `venue/`, data);
  },
  getTowns: () => {
    return api.invoke("GET", `town/`);
  },
};
