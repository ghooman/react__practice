import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3105",
});

export const signUp = async (email, nickname, password) => {
  const res = await api.post("/user", { email, nickname, password });
  return res.data;
};

export const login = async (email, password) => {
  const res = await api.post("/login", { email, password });
  const accesstoken = res.data.data.accesstoken;
  api.defaults.headers.common["Authorization"] = accesstoken;
  return res.data;
};

export const getUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};
