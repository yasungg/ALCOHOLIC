import HeaderDesign from "../HeaderDesign";
import FooterDesign from "../FooterDesign";
import Banner from "../Banner";
import styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { storage } from "../api/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import DescBoxIcon1 from "../Image/부모님.png";
import DescBoxIcon2 from "../Image/벚꽃.png";
import { UpBtn } from "../component/ReusableComponents";
import Modal from "../utils/Modal";

const Container = styled.div`
  // 전체 영역을 설정 flexbox로 배치할 때 기준이 필요할 것이라 생각했기 때문
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const DescBox = styled.div`
  // flex로 수직과 수평 배치를 한번에 컨트롤할 수 없다고 생각해서 카드를 담을 영역과 테마별 설명 영역 분리
  width: 1024px;
  height: 100px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .descBoxP1 {
    //h태그를 이용하기보다 p태그를 여러개 이용해 더 면밀하게 스타일을 설정 (h태그 설정 너무 안먹어요..)
    font-size: 1.3em;
    margin: 0;
  }
  .descBoxP2 {
    color: rgb(193, 159, 138);
    margin: 10px 0 0 30px;
  }
  img {
    // descbox 내 flex-direction은 column인데 descBoxP1 태그 옆 이미지는 수평 배치해야 하는 상황. p태그 안에 이미지 넣기로 판단
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
  @media screen and (max-width: 1024px) {
    // 1024px 밑으로 가도 설명이 보이도록 반응형 쿼리 작성
    width: 100%;
    padding-left: 15px;
  }
`;
const DivBox = styled.div`
  // 카드를 담을 플렉스박스
  width: 1024px; // 반응형 웹을 고려해 1024px로 설정.
  height: 350px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-self: center;
  @media screen and (max-width: 1024px) {
    width: 100vw;
    justify-content: space-evenly;
  }
`;
const Card = styled.div`
  width: 220px;
  height: 98%;
  align-self: flex-end;
  background: rgb(193, 159, 138);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: translate(0, -5px);
  }
  @media screen and (max-width: 1024px) {
    &:nth-child(4) {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    &:nth-child(3) {
      display: none;
    }
  }
`;
const DownBlanc = styled.div`
  display: flex;
  width: 100%;
  height: 160px;
  justify-content: center;
  align-items: center;
`;
const Main = () => {
  const [iconUrls, setIconUrls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 파이어베이스를 이용한 홈페이지 아이콘 렌더링
    const storageIconRef = ref(storage, "Icons");

    Promise.all([
      getDownloadURL(ref(storageIconRef, "부모님.png")), // 어버이날 이미지
      getDownloadURL(ref(storageIconRef, "벚꽃.png")), // 벚꽃 이미지
    ])
      .then((urls) => {
        setIconUrls(urls);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <HeaderDesign />
      <Banner />
      <DescBox>
        <p className="descBoxP1">
          <img src={iconUrls[0]} alt="이미지" />
          어버이날 선물 고민
        </p>
        <p className="descBoxP2">이 술은 어때요?</p>
      </DescBox>
      <DivBox>
        <Card className="card"></Card>
        <Card className="card"></Card>
        <Card className="card"></Card>
        <Card className="card"></Card>
      </DivBox>
      <DescBox>
        <p className="descBoxP1">
          <img src={iconUrls[1]} alt="이미지" />
          전통주에 흩날린 꽃내음
        </p>
        <p className="descBoxP2">꽃놀이를 우리 술과 함께 즐겨요!</p>
      </DescBox>
      <DivBox className="divBox2">
        <Card className="card"></Card>
        <Card className="card"></Card>
        <Card className="card"></Card>
        <Card className="card"></Card>
      </DivBox>
      <DownBlanc>
        <UpBtn />
      </DownBlanc>
      <FooterDesign />
    </Container>
  );
};
export default Main;
