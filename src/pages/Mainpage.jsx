import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { getUsers, refreshAccessToken } from "../api/api";
import Header from "../components/Header";

const MainPage = () => {
  const refreshToken = localStorage.getItem("REFRESH_TOKEN");

  useEffect(() => {
    if (refreshToken) {
      refreshAccessToken();
    }
  }, []);

  const handleGetUserClick = async () => {
    try {
      const response = await getUsers();
      console.log(response);
    } catch (e) {
      if (e.response.data.code === "expired") {
        refreshAccessToken();
      }
    }
  };
  return (
    <Wrap>
      <Header />
      <MainBox>메인페이지 입니다.</MainBox>
      <button onClick={() => handleGetUserClick()}>겟유저</button>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
`;
const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: tomato;
`;

export default MainPage;
