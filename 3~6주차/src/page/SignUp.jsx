import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
let SingupBG = styled.div`
  background: #070f2b;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

let SingupContainer = styled.form`
  padding-top: 5%;
  width: 40%;
  height: 100%;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
`;

let InputBox = styled.input`
  border-radius: 20px;
  height: 35px;
  background-color: rgb(233, 233, 233);
  padding-left: 10px;
  margin-top: 20px;
`;

let SubBtn = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

let AlreadyBox = styled.div`
  display: flex;
  justify-content: space-around;
  > div span {
    cursor: pointer;
    font-weight: 700;
  }
`;

let Checktype = styled.div`
  text-align: left;
  font-size: 12px;
  padding-left: 10px;
  margin-top: 5px;
  color: red;
`;

function SignUp() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  return (
    <SingupBG>
      <SingupContainer
        onSubmit={handleSubmit(async (data) => {
          await axios({
            method: "post",
            url: "http://localhost:8080/auth/signup",
            data: data,
          })
            .then(function (response) {
              console.log(response);
              alert(response.data.message);
              navigate("/login");
            })
            .catch(function (error) {
              alert(error.response.data);
              console.log(error);
            });
        })}>
        <h2>회원가입 페이지</h2>
        <InputBox
          id="name"
          type="text"
          placeholder="이름을 입력해주세요."
          {...register("name", {
            required: "이름을 입력해주세요!",
          })}
        />
        {errors.name && <Checktype>{errors.name.message}</Checktype>}
        <InputBox
          id="username"
          type="text"
          placeholder="아이디를 입력해주세요."
          {...register("username", {
            required: "아이디를 입력해주세요!",
            pattern: {},
          })}
        />
        {errors.username && <Checktype>{errors.username.message}</Checktype>}
        <InputBox
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: "이메일을 입력해주세요!",
            pattern: {
              value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && <Checktype>{errors.email.message}</Checktype>}
        <InputBox
          id="age"
          type="number"
          placeholder="나이를 입력해주세요"
          {...register("age", {
            required: "나이를 입력해주세요!",
            validate: {
              checkNum: (value) => !isNaN(value) || "숫자를 입력해주세요.",
              checkMinus: (value) => value > 0 || "나이는 음수가 될 수 없습니다.",
              checkSosoo: (value) => value % 1 === 0 || "나이는 소수가 될 수 없습니다.",
              checkAdult: (value) => value > 19 || "19세 이상만 가입할 수 있습니다.",
            },
          })}
        />
        {errors.age && <Checktype>{errors.age.message}</Checktype>}
        <InputBox
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register("password", {
            required: "비밀번호를 입력해주세요!",
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/,
              message: "비밀번호는 영어, 숫자, 특수문자를 포함해주세요",
            },
            minLength: {
              value: 4,
              message: "4자리 이상 비밀번호를 사용하세요.",
            },
            maxLength: {
              value: 12,
              message: "12자리 이하 비밀번호를 사용하세요.",
            },
          })}
        />
        {errors.password && <Checktype>{errors.password.message}</Checktype>}
        <InputBox
          id="passwordCheck"
          type="password"
          placeholder="비밀번호 확인"
          {...register("checkpassword", {
            validate: {
              checkPassword: (value) => value === password || "비밀번호를 다시 입력해주세요!",
            },
          })}
        />
        {errors.checkpassword && <Checktype>{errors.checkpassword.message}</Checktype>}
        <SubBtn type="submit">제출하기</SubBtn>
        <AlreadyBox>
          <div>이미 아이디가 있으신가요?</div>
          <div>
            <span
              onClick={() => {
                navigate("/login");
              }}>
              로그인 페이지로 이동하기
            </span>
          </div>
        </AlreadyBox>
      </SingupContainer>
    </SingupBG>
  );
}

export default SignUp;
