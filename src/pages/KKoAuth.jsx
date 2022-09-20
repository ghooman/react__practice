import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getKKoToken } from "../api/kakaoApi";
import { setAccessToken } from "../store/tokens";

const KKoAuth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(searchParams.get("code"));

  useEffect(() => {
    getKKoToken(
      searchParams.get("code"),
      "http://localhost:3001/kko-auth-redirect"
    ).then(({ access_token }) => {
      dispatch(setAccessToken(access_token));
      window.Kakao.Auth.setAccessToken(access_token);
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: function (response) {
          console.log(response);
        },
        fail: function (error) {
          console.log(error);
        },
      });

      navigate("/");
    });
  }, [searchParams]);

  return <div>KKoAuth</div>;
};

export default KKoAuth;
