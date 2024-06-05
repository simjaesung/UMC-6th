import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  background: #a0afff;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  color: #f9ffff;
`;

export const Menu = styled.div`
  font-size: 100%;
  width: 60%;
  display: flex;
  justify-content: space-between;
  font-weight: 900;
`;

export const MeunItem = styled.div`
  font-size: 30px;
  text-decoration: none;
  cursor: pointer;
`;

export const IconBox = styled.div`
  width: ${props => props.sz};
  height: ${props => props.sz};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CntBox = styled.div`
  position: absolute;
  text-align: right;
  padding-left: 10px;
  color: black;
`;

export const BG = styled.div`
  background: #cdecfa;
  height: 100vh;
`;

export const ItemContainer = styled.div`
  background: #cdecfa;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ItemContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-weight: 500;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemBox = styled.div`
  padding: 10px;
  width: 60%;
  display: flex;
  align-items: center;
`;

export const ItemImgBox = styled.div`
  width: 20%;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemInforBox = styled.div`
  width: 75%;
  font-size: 15px;
  padding: 10px;
`;

export const AmountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AccountBox = styled.div`
  border-top: 1px solid black;
  width: 60%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const DeleteBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Btn = styled.button`
  padding: 10px;
  border: 1px solid ${props => props.color};
  background: white;
  color: ${props => props.color};
  cursor: pointer;
  border-radius: 4px;
`;

export const DelModalBox = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
`;
export const DelModal = styled.div`
  background: white;
  padding: 30px;
  border-radius: 4px;
  width: 40%;
`;
