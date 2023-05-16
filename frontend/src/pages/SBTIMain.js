import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import AxiosApi from "../api/AxiosApi";
import Logo from "../images/Logo.JPG"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 15em;
    border-radius: 50%;
  }
  
  .box {
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 0.6em;
    color: black;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 20px;
    padding: 1.2em 2.8em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;

    &:hover,
    &:focus {
      color: brown;
      outline: 0;
    }

    border-color: brown;
    // border: 0;
    border-radius: 0;
    color: brown;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: color 150ms ease-in-out;
    
    &:after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 100%;
      background: brown;
      z-index: -1;
      transition: width 150ms ease-in-out;
    }
    
    &:hover {
      color: #fff;
      &:after {
        width: 110%;
      }
    }
  }



`;



const SBTIMain = () => {
  const navigate = useNavigate();

  const [ userInfo, setUserInfo] = useState([]);

  // localStorage를 이용하여 SBTI 문항에 대한 답변 기록 저장
  localStorage.setItem("takju", 0);
  localStorage.setItem("chungju", 0);
  localStorage.setItem("wine", 0);
  localStorage.setItem("spirits", 0);

  const onClickSBTI = async() => {
    navigate('/SBTIStartQuestion1');
  }

  useEffect(() => {
    const userInfo = async() => {
      const rsp = await AxiosApi.userNumber("10000001");
      if(rsp.status === 200) setUserInfo(rsp.data);
    }
    userInfo();
  }, []);

  return (
    <Container>
      <a href="/">
        <img src={Logo} alt="홈 이동 로고" />
      </a>
      <div>
        <p>SBTI 시작하기</p>
      </div>
      <div>
        {userInfo.map(user => (
          <div key={user.no}>
            <p>{user.name}님의 기존 SBTI 결과: {user.sbti}</p>
          </div>
        ))}
      </div>
      <div>
        <button className="box" onClick={onClickSBTI}>SBTI</button>
      </div>

    </Container>
  );
};
export default SBTIMain;