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
  updateVenue: (id, data) => {
    return api.invoke("PUT", `venue/${id}`, data);
  },
  deleteVenue: (id) => {
    return api.invoke("DELETE", `venue/${id}`);
  },
  getVenuesByVendor: (id) => {
    return api.invoke("GET", `venue/vendor/${id}`);
  },
  addImageToVenue: (id, data) => {
    return api.invoke("POST", `venue/image/${id}`, data);
  },
  removeImageToVenue: (id, data) => {
    console.log(data);
    return api.invoke("PUT", `venue/image/${id}`, data);
  },
  getVenue: (id) => {
    return api.invoke("GET", `venue/${id}`);
  },
  addVenue: (data) => {
    return api.uploadFormData("POST", `venue/`, data);
  },
  getTowns: () => {
    return api.invoke("GET", `town/`);
  },
};
