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
  const accessToken = res.data.data.accessToken;
  const refreshToken = res.data.data.refreshToken;
  api.defaults.headers.common["Authorization"] = accessToken;
  localStorage.setItem("REFRESH_TOKEN", refreshToken);
  return res.data;
};

export const getUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};
export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("REFRESH_TOKEN");
  const res = await api.post("/refreshToken", null, {
    headers: { ["Authorization"]: refreshToken },
  });
  api.defaults.headers.common["Authorization"] = res.data.data.accessToken;
  return res;
};
