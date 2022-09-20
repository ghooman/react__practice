import axios from "axios";

const kkaoApi = axios.create({
  baseURL: "https://kauth.kakao.com",
});

export const getKKoToken = async (code, redirectUri) => {
  const quries = new URLSearchParams();

  quries.append("grant_type", "authorization_code");
  quries.append("client_id", process.env.REACT_APP_KKO_REST_KEY);
  quries.append("redirect_uri", redirectUri);
  quries.append("code", code);

  const resp = await kkaoApi.post(`/oauth/token`, quries.toString(), {
    headers: {
      ["Content-type"]: "application/x-www-form-urlencoded;charset=utf-8",
    },
  });

  console.log(resp.data);

  return resp.data;
};
