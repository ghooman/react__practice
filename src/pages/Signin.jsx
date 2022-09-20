import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../api/api";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../store/tokens";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await login(data.email, data.pw);
      navigate("/");
      dispatch(setAccessToken(response.data.accessToken));
    } catch (e) {
      console.error(e);
      alert(e);
    }
  };

  return (
    <Wrap>
      <SigninBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TitleBox>로그인</TitleBox>
          <EmailBox>
            <Title>이메일</Title>
            <EmailInput
              {...register("email", {
                required: true,
                pattern:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              })}
              type="text"
              placeholder="이메일을 입력하세요."
            />
            {errors.email ? (
              <ErrorMsg>이메일 형식이 맞지 않습니다.</ErrorMsg>
            ) : null}
          </EmailBox>
          <PasswordBox>
            <Title>패스워드</Title>
            <PasswordInput
              {...register("pw", {
                required: true,
                // pattern: /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/,
              })}
              type="password"
              placeholder="비밀번호를 입력하세요."
            />
            {errors.pw ? (
              <ErrorMsg>패스워드 형식이 맞지 않습니다.</ErrorMsg>
            ) : null}
          </PasswordBox>
          <BtnBox>
            <SubmitBtn type="submit" value="확인" />
            <CancelBtn
              onClick={() => {
                navigate("/");
              }}
            >
              취소
            </CancelBtn>
          </BtnBox>
        </form>
        <BtnBox>
          <button
            onClick={() =>
              window.Kakao.Auth.authorize({
                redirectUri: "http://localhost:3001",
              })
            }
          >
            카카오 로그인
          </button>
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

const SubmitBtn = styled.input`
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
