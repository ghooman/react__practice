import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signin = () => {
  const navigate = useNavigate();
  const [signin, setSignin] = useState(false);
  const [signinInfo, setSigninInfo] = useState({
    email: "",
    pw: "",
  });

  const handleInputValue = (key, e) => {
    setSigninInfo({ ...signinInfo, [key]: e.target.value });
  };

  const handleSignin = async ({ email, pw }) => {
    try {
      let response = await axios.post(
        "서버URL",
        { email, pw },
        { headers: { "content-type": "application/json" } }
      );
      let data = response.data;
      setSignin(true);
    } catch (err) {
      console.log("errors :", err);
    }
  };
  return (
    <Wrap>
      <SigninBox>
        <TitleBox>로그인</TitleBox>
        <EmailBox>
          <Title>이메일</Title>
          <EmailInput
            type="text"
            onChange={(e) => handleInputValue("email", e)}
            placeholder="이메일을 입력하세요."
          />
        </EmailBox>
        <PasswordBox>
          <Title>패스워드</Title>
          <PasswordInput
            type="password"
            onChange={(e) => handleInputValue("pw", e)}
            placeholder="비밀번호를 입력하세요."
          />
        </PasswordBox>
        <BtnBox>
          <SubmitBtn onClick={() => handleSignin(signinInfo)}>확인</SubmitBtn>
          <CancelBtn
            onClick={() => {
              navigate("/");
            }}
          >
            취소
          </CancelBtn>
        </BtnBox>
      </SigninBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SigninBox = styled.div`
  width: 26rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: tomato;
  border: 0.2rem solid black;
`;
// 타이틀
const TitleBox = styled.div`
  width: auto;
  height: auto;
  box-sizing: border-box;
  width: auto;
  margin-top: 2rem;
  font-size: 2.5rem;
  text-align: center;
  background-color: pink;
`;
// 이메일
const EmailBox = styled.div`
  box-sizing: border-box;
  width: 20rem;
  height: 6.2rem;
  margin-top: 3rem;
  background-color: beige;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 5.5rem;
  height: 1.5rem;
  margin-left: 1rem;
  margin-top: 0.9rem;
  background-color: yellow;
  font-weight: bold;
`;

const EmailInput = styled.input`
  margin-top: 0.2rem;
  width: 18rem;
  height: 2rem;
  align-self: center;
  font-size: 16px;
`;

const ErrorMsg = styled.span`
  margin-left: 1rem;
  color: red;
`;

// 패스워드
const PasswordBox = styled.div`
  box-sizing: border-box;
  width: 20rem;
  height: 6.2rem;
  margin-top: 1.5rem;
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
`;

const PasswordInput = styled(EmailInput)``;

// 버튼
const BtnBox = styled.div`
  box-sizing: border-box;
  width: 20rem;
  height: 3rem;
  margin-top: 2.5rem;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubmitBtn = styled.button`
  width: 3.8rem;
  height: 2.5rem;
  font-size: 1rem;
  margin-right: 2rem;
  cursor: pointer;
`;

const CancelBtn = styled.button`
  width: 3.8rem;
  height: 2.5rem;
  font-size: 1rem;
  margin-left: 2rem;
  cursor: pointer;
`;

export default Signin;
