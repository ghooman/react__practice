import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const signUp = async (email, nickname, password) => {
  const result = await api.post("/user", { email, nickname, password });
  return result.data;
};

export const login = async (email, password) => {
  const result = await api.post("/login", { email, password });
  return result.data;
};
