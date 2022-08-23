import React from 'react';
import styled from 'styled-components';
import logo from '../logo.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();

  return (
    <Wrap>
      <LeftBox>
        <LogoImg src={logo}></LogoImg>
        <HomeBtn>홈</HomeBtn>
      </LeftBox>
      <SearchBox>
        <SearchInput
          type="text"
          placeholder="검색어를 입력하세요"
        ></SearchInput>
      </SearchBox>
      <RightBox>
        <LoginBtn onClick={() => navigate('/signin')}>로그인</LoginBtn>
        <SignupBtn>회원가입</SignupBtn>
      </RightBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 6em;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.2rem solid black;
`;
// 왼쪽 박스
const LeftBox = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-left: 4rem;
  width: 25rem;
  height: 3.5rem;
  display: flex;
  /* background-color: beige; */
  align-items: center;
`;

const LogoImg = styled.img`
  height: 2.9rem;
`;
const HomeBtn = styled.button`
  width: 3rem;
  height: 3rem;
  position: relative;
  left: 2rem;
  font-size: large;
  background-color: white;
  border: 0rem solid white;
  cursor: pointer;
`;

// 서치 박스
const SearchBox = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 25rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: aqua; */
`;

const SearchInput = styled.input`
  width: 23rem;
  height: 3em;
  border-radius: 1rem;
  padding: 0px 1rem;
  border: 0.1rem solid black;
`;

// 오른쪽 박스
const RightBox = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-right: 4rem;
  width: 11rem;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: #e45903; */
`;

const LoginBtn = styled.button`
  width: 5rem;
  height: 3rem;
  font-size: large;
  background-color: white;
  border: 0rem solid white;
  cursor: pointer;
`;

const SignupBtn = styled(LoginBtn)``;

export default Header;
