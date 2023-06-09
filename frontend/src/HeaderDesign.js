import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { storage } from "./api/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./api/Context";
import AxiosApi from "./api/AxiosApi";

const initialminWidth = "120px";
const changedminWidth = "220px";
const initialMargin = "50px";
const changedMargin = "0";

const Header = styled.div`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
  width: 100%;
  height: 180px;
  display: flex;
  flex-flow: column;
  @media screen and (max-width: 768px) {
    .searchBox {
      display: none;
    }
    .userMenu {
      display: none;
    }
    .HamburgerBtn {
      display: block;
    }
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 73%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid rgb(223, 214, 210);
`;
const HeaderNavi = styled.div`
  display: flex;
  width: 100%;
  height: 27%;
  justify-content: center;
  border-bottom: 0.5px solid rgb(223, 214, 210);
`;
const NaviButtons = styled.button`
  width: 130px;
  height: 100%;
  background: white;
  margin-right: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: none;
  color: #495057;
  cursor: pointer;
  &:hover {
    color: rgb(223, 214, 210);
    transition: all 0.5s;
  }
  &:visited {
    text-decoration: none;
  }
`;
const LogoButton = styled.button`
  background: white;
  border: none;
  cursor: pointer;
  margin: 8px 0 5px 20px;
`;
const Logo = styled.img`
  background: rgb(223, 214, 210);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  align-self: flex-start;
`;
const SearchBox = styled.div`
  width: 400px;
  height: 40px;
  background: white;
  display: flex;
  border: 2px solid rgba(223, 214, 210);
  border-radius: 10px;
  #search {
    width: 350px;
    height: 30px;
    border: none;
    margin-left: 5px;
    align-self: center;
    caret-color: gray;
    &:focus {
      outline: none;
    }
  }
  .searchBtn {
    display: flex;
    width: 30px;
    height: 30px;
    margin: auto;
    background: white;
    border: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:active {
      border: none;
    }
    .searchBtnIcon {
      width: 20px;
      height: 20px;
      color: rgb(223, 214, 210);
    }
  }
`;
const UserMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.minWidth};
  height: 30px;
  align-self: flex-start;
  margin-right: ${(props) => props.margin};
  font-size: 0.5rem;
`;
const UserButtons = styled.button`
  width: 60px;
  height: 20px;
  font-size: 0.5rem;
  background: white;
  color: #495057;
  border: none;
  border-radius: 5px;
  box-shadow: none;
  cursor: pointer;

  &:hover {
    color: rgb(223, 214, 210);
    transition: all 0.5s;
  }
  &:visited {
    text-decoration: none;
  }
`;
const HamburgerBtn = styled.button`
  width: 3rem;
  height: 3rem;
  padding: 0;
  display: none;
  background: rgb(223, 214, 210);
  img {
    width: 2rem;
    height: 2rem;
    background-color: white;
  }
`;

const HeaderDesign = () => {
  const [imageUrls, setImageUrls] = useState([]); // 아이콘 이미지의 파이어베이스 URL을 담은 useState
  const navigate = useNavigate(); // Navigate bar를 위한 useNavigate
  const { isLogin, contextLogout, userNum } = useContext(UserContext); // 로그인 관리를 위한 Context API
  const [userName, setUserName] = useState("");
  const [inputProductName, setInputProductName] = useState("");
  useEffect(() => {
    // 파이어베이스를 이용한 홈페이지 아이콘 렌더링
    const storageIconRef = ref(storage, "Icons");

    Promise.all([
      getDownloadURL(ref(storageIconRef, "logo.jpg")), // 로고 이미지
      getDownloadURL(ref(storageIconRef, "SearchIcon.png")), // 검색 버튼 이미지
      getDownloadURL(ref(storageIconRef, "HamburgerBtn.png")), // 햄버거 버튼 이미지
    ])
      .then((urls) => {
        setImageUrls(urls);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    const getName = async (num) => {
      if (isLogin) {
        try {
          const responseNum = await AxiosApi.userNumber(num);
          console.log(responseNum.data);
          setUserName(responseNum.data[0].user_name);
        } catch (error) {
          console.error("이름 받아오기 실패!!", error);
          console.log(userNum);
        }
      } else if (!isLogin) {
        setUserName("");
      }
    };
    getName(userNum);
  }, [isLogin]);
  const onClickLogout = () => {
    contextLogout();
    navigate("/");
  };
  const onChangeProductName = (e) => {
    setInputProductName(e.target.value);
  };
  const swordPush = () => {
    navigate(`/ProductSearch?sword=${inputProductName}`);
  };
  return (
    <Header>
      <HeaderContainer>
        <LogoButton>
          <Link to="/">
            <Logo src={imageUrls[0]} alt="로고"></Logo>
          </Link>
        </LogoButton>
        <SearchBox className="searchBox">
          <input
            type="text"
            value={inputProductName}
            id="search"
            onChange={onChangeProductName}
          />
          <button className="searchBtn" type="submit" onClick={swordPush}>
            <img src={imageUrls[1]} className="searchBtnIcon" alt="돋" />
          </button>
        </SearchBox>
        {isLogin ? (
          <UserMenu
            className="userMenu"
            minWidth={changedminWidth}
            margin={changedMargin}
          >
            <p>
              <UserButtons onClick={() => navigate("/MyPage")}>
                {userName}
              </UserButtons>
              님 환영합니다!
            </p>
            <UserButtons onClick={onClickLogout}>로그아웃</UserButtons>
          </UserMenu>
        ) : (
          <UserMenu
            className="userMenu"
            minWidth={initialminWidth}
            margin={initialMargin}
          >
            <UserButtons className="signUp" onClick={() => navigate("/SignUp")}>
              <span>회원가입</span>
            </UserButtons>
            <UserButtons onClick={() => navigate("/Login")}>
              <span>로그인</span>
            </UserButtons>
          </UserMenu>
        )}

        <HamburgerBtn className="HamburgerBtn">
          <img src={imageUrls[2]} alt="" />
        </HamburgerBtn>
      </HeaderContainer>
      <HeaderNavi>
        <Link to="/">
          <NaviButtons>
            <span>홈</span>
          </NaviButtons>
        </Link>
        <NaviButtons>
          <span onClick={() => navigate("/SBTIMain")}>이달의 술</span>
        </NaviButtons>
        <NaviButtons onClick={() => navigate("/RecmdPage")}>
          <span>술 추천</span>
        </NaviButtons>
        <NaviButtons onClick={() => navigate("/Event")}>
          <span>이벤트</span>
        </NaviButtons>
      </HeaderNavi>
    </Header>
  );
};

export default HeaderDesign;
