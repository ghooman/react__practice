import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signUp } from "../api/api";
import { useDispatch } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.pw !== data.pwConfirm) {
      alert("패스워드와 패스워드 확인 값이 다릅니다.");
      return;
    }

    try {
      const response = await signUp(data.email, data.id, data.pw);
      alert("회원가입에 성공했습니다.");
      navigate("/signin");

      console.log(response);
    } catch (e) {
      console.error(e);
      alert(e);
    }
  };

  return (
    <Wrap>
      <SignupBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TitleBox>회원가입</TitleBox>
          <EmailBox>
            <Title>이메일</Title>
            <EmailInput
              {...register("email", {
                required: true,
                // pattern:
                //   /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              })}
              type="text"
              placeholder="이메일을 입력하세요."
            />
            {errors.email ? (
              <ErrorMsg>이메일 형식이 맞지 않습니다.</ErrorMsg>
            ) : null}
          </EmailBox>
          <IdBox>
            <Title>닉네임</Title>
            <IdInput
              {...register("id", {
                required: true,
                // pattern: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/,
              })}
              type="text"
              placeholder="닉네임을 입력하세요."
            ></IdInput>
            {errors.id ? (
              <ErrorMsg>아이디 형식이 맞지 않습니다.</ErrorMsg>
            ) : null}
          </IdBox>
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
          <PasswordConfirm>
            <Title>패스워드 확인</Title>
            <PasswordInput
              {...register("pwConfirm", { required: true })}
              type="password"
              placeholder="비밀번호를 입력하세요."
            />
          </PasswordConfirm>
          <BtnBox>
            <SubmitBtn type="submit" value="확인"></SubmitBtn>
            <CancelBtn
              onClick={() => {
                navigate("/");
              }}
            >
              취소
            </CancelBtn>
          </BtnBox>
        </form>
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

// 아이디
const IdBox = styled.div`
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

export default Signup;
