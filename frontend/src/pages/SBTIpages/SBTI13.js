import React from "react";
import AxiosApi from "../../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #edeae3;
  margin: 10%;

  .question{
    margin-top: 10%;
    font-size: 1.5em;
    color: #333;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

  }

  .button{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
  }


`;


const SBTI13 = () => {
  const navigate = useNavigate();

  const [questInfo, setQuestInfo] = useState([]);

  // localStorage에 해당 주종 증가 효과
  const increaseInteger = (key) => {
    const value = localStorage.getItem(key);
  
    if (value) {
      const intValue = parseInt(value);
      const newValue = intValue + 1;
      localStorage.setItem(key, newValue.toString());
      return newValue;
    }
  
    return null;
  };

  // localStorage에 해당 주종 감소 효과
  const decreaseInteger = (key) => {
    const value = localStorage.getItem(key);
  
    if (value) {
      const intValue = parseInt(value);
      const newValue = intValue - 1;
      localStorage.setItem(key, newValue.toString());
      return newValue;
    }
  
    return null;
  };

  // '칭따오!' 선택한 경우
  const clickYes = () => {
    questInfo.forEach((item) => {
      if(item.answer1 === "탁주" || item.answer2 === "탁주") increaseInteger("takju");
      if(item.answer1 === "청주" || item.answer2 === "청주") increaseInteger("chungju");
      if(item.answer1 === "과실주" || item.answer2 === "과실주") increaseInteger("wine");
      if(item.answer1 === "증류주" || item.answer2 === "증류주") decreaseInteger("spirits");
    });   
    navigate("/SBTI14");
  }

  // '연태 고량주!' 선택한 경우
  const clickNo = () => {
    questInfo.forEach((item) => {
      if(item.answer1 === "탁주" || item.answer2 === "탁주") decreaseInteger("takju");
      if(item.answer1 === "청주" || item.answer2 === "청주") decreaseInteger("chungju");
      if(item.answer1 === "과실주" || item.answer2 === "과실주") decreaseInteger("wine");
      if(item.answer1 === "증류주" || item.answer2 === "증류주") increaseInteger("spirits");
    });
    navigate("/SBTI14");
  }

  useEffect(() => {
    const questInfo = async() => {
      const rsp = await AxiosApi.sbtiQuestion("13");
      if(rsp.status === 200) setQuestInfo(rsp.data);
    };
    questInfo();
  }, []);


  return (
    <Container>
      <div className="question">
        {questInfo && questInfo.map(quest => (
          <div key={quest.number}>
            <p>질문 : {quest.question}</p>
          </div>
        ))}
      </div>
      <div className="button">
        <button onClick={clickYes}>칭따오!</button>
        <button onClick={clickNo}>연태 고량주!</button>
      </div>
      <div>
        <p>탁주: {window.localStorage.getItem("takju")}</p>
        <p>청주: {window.localStorage.getItem("chungju")}</p>
        <p>과실주: {window.localStorage.getItem("wine")}</p>
        <p>증류주: {window.localStorage.getItem("spirits")}</p>
      </div>

    </Container>
  );
};
export default SBTI13;