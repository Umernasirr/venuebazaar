import { api } from "./apiServices";
export const service = {
  login: (data) => {
    return api.invoke("POST", `auth/login`, data);
  },
  getMe: () => {
    return api.invoke("GET", `auth/me`);
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
  getAllBookingsByVendor: (id) => {
    return api.invoke("GET", `booking/vendor/${id}`);
  },
  acceptBooking: (booking) => {
    return api.invoke(`PUT`, `booking/accept`, booking);
  },
  removeBooking: (id) => {
    return api.invoke(`DELETE`, `booking/delete/${id}`);
  },
  createBooking: (obj) => {
    return api.invoke("POST", `booking`, obj);
  },

  getUsers: () => {
    return api.invoke("GET", "admin/users");
  },

  getVenuesAdmin: () => {
    return api.invoke("GET", "admin/venues");
  },

  setAccountAvailability: (id, accountActive) => {
    return api.invoke("PUT", `admin/users/${id}`, accountActive);
  },

  setVenueDates: (id, postObj) => {
    return api.invoke("PUT", `admin/venues/${id}`, postObj);
  },
};
