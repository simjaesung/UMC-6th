import styled from "styled-components";
import {useNavigate} from "react-router-dom";

let NotFoundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
`;

let NotFoundBtn = styled.button`
  width: 200px;
  height: 50px;
  border: 0px;
  background: skyblue;
`;

function NotFound() {
  let navigate = useNavigate();
  return (
    <NotFoundBox>
      <h1>잘못된 페이지입니다.</h1>
      <NotFoundBtn
        onClick={() => {
          navigate("/");
        }}>
        메인페이지로 이동하기
      </NotFoundBtn>
    </NotFoundBox>
  );
}

export default NotFound;
