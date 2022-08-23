import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Mainpage = () => {
  return (
    <Wrap>
      <Header />
      <MainBox>메인페이지 입니다.</MainBox>
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

export default Mainpage;
