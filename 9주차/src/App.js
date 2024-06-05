import './App.css';
import { useEffect } from 'react';
import { CartIcon, ChevronDown, ChevronUp } from './constants/icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  increase,
  decrease,
  clearCart,
  calculateTotals,
} from './store/items/itemSlice';
import { showModal, unshowModal } from './store/modal/modalSlice';
import {
  NavContainer,
  Menu,
  MeunItem,
  IconBox,
  ItemBox,
  ItemContainer,
  ItemContainer2,
  TitleBox,
  ItemImg,
  ItemImgBox,
  ItemInforBox,
  AmountBox,
  BG,
  AccountBox,
  CntBox,
  DeleteBox,
  Btn,
  DelModalBox,
  DelModal,
} from './styles/AppStyle';

const App = function App() {
  let instore = useSelector(state => {
    return state.item;
  });
  let modalstate = useSelector(state => {
    return state.modal;
  });

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, []);

  return (
    <div className="App">
      <NavContainer>
        <Menu>
          <MeunItem>UMC PlayList</MeunItem>
          <IconBox sz={'30px'}>
            <CartIcon />
            <CntBox>{instore[1][1]}</CntBox>
          </IconBox>
        </Menu>
      </NavContainer>
      <BG>
        <ItemContainer>
          <TitleBox>
            <h1>당신이 선택한 음반</h1>
          </TitleBox>
          <ItemContainer2>
            {instore[0].map(function (item, i) {
              return (
                <ItemBox>
                  <ItemImgBox>
                    <ItemImg src={item.img} />
                  </ItemImgBox>
                  <ItemInforBox>
                    <div>
                      {item.title} || {item.singer}
                    </div>
                    <div>₩{item.price}</div>
                  </ItemInforBox>
                  <AmountBox>
                    <IconBox
                      sz={'20px'}
                      onClick={() => {
                        dispatch(increase(i));
                        dispatch(calculateTotals());
                      }}
                    >
                      <ChevronUp />
                    </IconBox>
                    <div>{item.amount}</div>
                    <IconBox
                      sz={'20px'}
                      onClick={() => {
                        dispatch(decrease(i));
                        dispatch(calculateTotals());
                      }}
                    >
                      <ChevronDown />
                    </IconBox>
                  </AmountBox>
                </ItemBox>
              );
            })}

            <AccountBox>
              <div>총가격</div>
              <div>₩{instore[1][0]}</div>
            </AccountBox>
            <DeleteBox>
              <Btn
                color={'red'}
                onClick={() => {
                  dispatch(showModal());
                }}
              >
                장바구니 초기화
              </Btn>
            </DeleteBox>
          </ItemContainer2>
        </ItemContainer>
      </BG>
      {modalstate ? (
        <DelModalBox>
          <DelModal>
            <div style={{ marginBottom: '15px' }}>
              담아두신 모든 음반을 삭제하시겠습니까?
            </div>
            <Btn
              color={'blue'}
              style={{ marginRight: '15px' }}
              onClick={() => {
                dispatch(clearCart());
                dispatch(unshowModal());
                dispatch(calculateTotals());
              }}
            >
              네
            </Btn>
            <Btn
              color={'red'}
              onClick={() => {
                dispatch(unshowModal());
              }}
              style={{ marginLeft: '15px' }}
            >
              아니오
            </Btn>
          </DelModal>
        </DelModalBox>
      ) : null}
    </div>
  );
};

export default App;
