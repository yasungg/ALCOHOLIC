import React from "react";
import styled from "styled-components";
import HeaderDesign from "../HeaderDesign";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 550px;

.findpw {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 20px;
    }
`;
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
`;

const Input = styled.input`
    border: 1px solid black;
    color: gray;
    width: 400px;
    height: 50px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 3px;
`;
const Find = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .pwfindbutton {
        width: 400px;
        height: 60px;
        background-color: #c19f8a;
        border-style: none;
        font-weight: bold;
        color: white;
        border-radius: 3px;
      }
    .pwfindbutton:hover {
        cursor: pointer;
      }
`;
const FindPw = () => {


    return (
        <Container>
            <HeaderDesign/>
        <div className="findpw">
            <span>비밀번호 찾기</span>
        </div>
        <Item>
        <Input type="text" placeholder="아이디를 입력해주세요" />
        <Input type="email" placeholder="이메일을 입력해주세요"/>
        </Item>
      <Find><button className="pwfindbutton">확인</button></Find>
    </Container>


    );
};
export default FindPw;