import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

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

let Checktype = styled.div`
  text-align: left;
  font-size: 12px;
  padding-left: 10px;
  margin-top: 5px;
  color: red;
`;

function Login() {
  let navigate = useNavigate();
  //const [cookies, setCookie] = useCookies(["id"]); // 쿠키 훅
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <SingupBG>
      <SingupContainer
        onSubmit={handleSubmit(async (data) => {
          await axios({
            method: "post",
            url: "http://localhost:8080/auth/login",
            data: data,
          })
            .then(function (response) {
              console.log(response.data);
              alert(response.data.message);
              //setCookie("id", response.data.cookie);
              navigate("/");
            })
            .catch(function (error) {
              console.log(error.response.data);
              alert(error.response.data);
            });
        })}>
        <h2>로그인 페이지</h2>
        <InputBox
          id="username"
          type="text"
          placeholder="아이디를 입력해주세요."
          {...register("username", {
            required: "아이디를 입력해주세요!",
          })}
        />
        {errors.username && <Checktype>{errors.username.message}</Checktype>}

        <InputBox
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register("password", {
            required: "비밀번호를 입력해주세요!",
          })}
        />
        {errors.password && <Checktype>{errors.password.message}</Checktype>}
        <SubBtn type="submit">로그인</SubBtn>
      </SingupContainer>
    </SingupBG>
  );
}

export default Login;
