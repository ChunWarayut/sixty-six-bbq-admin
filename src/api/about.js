import "./axios-gbobal";
import axios from "axios";

export const getAboutList = async page => {
  return await (
    await axios({ method: "GET", url: "about", params: { page: page } })
  ).data;
};

export const getAboutById = async id => {
  return await (await axios({ method: "get", url: `about/${id}` })).data;
};

export const createAbout = async lists => {
  return await axios({
    method: "POST",
    url: "about",
    data: { ...lists, username: localStorage.getItem("id_login") },
  });
};

export const editAbout = async lists => {
  return await axios({
    method: "PUT",
    url: `about/${lists.id}`,
    data: { ...lists, username: localStorage.getItem("id_login") },
  });
};

export const deleteAbout = async id => {
  return await axios({
    method: "DELETE",
    url: `about/${id}`,
    data: { username: localStorage.getItem("id_login") },
  });
};
