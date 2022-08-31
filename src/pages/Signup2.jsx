import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState(false);
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    nickname: "",
    pw: "",
  });

  const handleInputValue = (key, e) => {
    setSignupInfo({ ...signupInfo, [key]: e.target.value });
  };

  const handleSignup = async ({ email, nickname, pw }) => {
    try {
      let response = await axios.post(
        "서버URL",
        { email, nickname, pw },
        { headers: { "content-type": "application/json" } }
      );
      let data = response.data;
      setSignup(true);
    } catch (err) {
      console.log("error :", err);
    }
  };

  return (
    <Wrap>
      <SignupBox>
        <TitleBox>회원가입</TitleBox>
        <EmailBox>
          <Title>이메일</Title>
          <EmailInput
            type="text"
            name="inputemail"
            placeholder="이메일을 입력하세요."
            onChange={(e) => handleInputValue("email", e)}
          />
        </EmailBox>
        <NicknameBox>
          <Title>닉네임</Title>
          <IdInput
            type="text"
            name="inputnickname"
            placeholder="닉네임을 입력하세요."
            onChange={(e) => handleInputValue("nickname", e)}
          ></IdInput>
        </NicknameBox>
        <PasswordBox>
          <Title>패스워드</Title>
          <PasswordInput
            type="password"
            name="inputpw"
            placeholder="비밀번호를 입력하세요."
            onChange={(e) => handleInputValue("pw", e)}
          />
        </PasswordBox>
        <PasswordConfirm>
          <Title>패스워드 확인</Title>
          <PasswordInput type="password" placeholder="비밀번호를 입력하세요." />
        </PasswordConfirm>
        <BtnBox>
          <SubmitBtn onClick={() => handleSignup(signupInfo)}>확인</SubmitBtn>
          <CancelBtn
            onClick={() => {
              navigate("/");
            }}
          >
            취소
          </CancelBtn>
        </BtnBox>
      </SignupBox>
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

const SignupBox = styled.div`
  width: 26rem;
  height: 48rem;
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
  height: 7rem;
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

// 닉네임
const NicknameBox = styled.div`
  box-sizing: border-box;
  width: 20rem;
  height: 7rem;
  margin-top: 1.5rem;
  background-color: beige;
  display: flex;
  flex-direction: column;
`;

const IdInput = styled(EmailInput)``;

// 패스워드
const PasswordBox = styled.div`
  box-sizing: border-box;
  width: 20rem;
  height: 7rem;
  margin-top: 1.5rem;
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
`;

const PasswordInput = styled(EmailInput)``;

// 패스워드 확인
const PasswordConfirm = styled(PasswordBox)``;

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

export default Signup;
