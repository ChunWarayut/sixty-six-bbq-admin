import "./axios-gbobal";
import axios from "axios";

export const loginByUsername = async (username, password) => {
  return await (
    await axios({
      method: "POST",
      url: "user/login",
      data: { username, password },
    })
  ).data;
};
