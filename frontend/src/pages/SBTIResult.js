import React, { useEffect, useState} from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
import X from "../images/x.png";

const OutBox = styled.div`
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: beige;
`;

const Container = styled.div`
  width: 480px;
  height: 600px;
  border: 1px solid black;
  background-color: white;
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 50px;
  text-align: center;

  .close {
    width: 15px;
    margin-left: auto;
    margin-right: 10px;
    margin-top: -20px;
    cursor: pointer;
  }

  .usersbti {
    font-size: 1.5em;
  }

  .recommend {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .recommend img {
    padding-left: 10px;
    padding-right: 10px;
    width: 80px;
    height: 80px;
    cursor: pointer;
  }
  .sul{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  }

  /* 하단 버튼 2개 */
  .buttonBox {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
  }

  button {
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
    padding: 1.2em 4em;
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

const SBTIResult = () => {
  let tmpSbti;

  const navigate = useNavigate();

  const [ userInfo, setUserInfo] = useState([]);
  const [ sbtiInfo, setSbtiInfo ] = useState([]);

  // 설문 결과에 따른 4가지 주종 유형 계산
  const SBTIResult = () => {
    const takju = parseInt(localStorage.getItem("takju"));
    const chunju = parseInt(localStorage.getItem('chungju'));
    const wine = parseInt(localStorage.getItem('wine'));
    const spirits = parseInt(localStorage.getItem('spirits'));

    const values = [takju, chunju, wine, spirits];
    const maxValue = Math.max(...values);

    const variableNames = ['takju', 'chunju', 'wine', 'spirits'];
    const maxVariable = variableNames[values.indexOf(maxValue)];
    variableNames.splice(values.indexOf(maxValue), 1);
    const secondMaxVariable = variableNames[values.indexOf(Math.max(...values))];

    return {
      maxVariable: String(maxVariable),
      secondMaxVariable: String(secondMaxVariable),
    };
  };

  const result = SBTIResult();
  console.log("첫번째 " + result.maxVariable); // 가장 큰 값의 변수명
  console.log("두번째" + result.secondMaxVariable); // 두 번째로 큰 값의 변수명
  if(result.maxVariable === "takju") {
    tmpSbti = "숙취가 두렵지 않은 탁주 러버";
    AxiosApi.sbtiUpdate(10000001, tmpSbti);
  }
  if(result.maxVariable === "chungju") {
    tmpSbti = "청아하고 우아한 한잔";
    AxiosApi.sbtiUpdate(10000001, tmpSbti);  
  }
  if(result.maxVariable === "wine") {
    tmpSbti = "와인 말고 전통주"
    AxiosApi.sbtiUpdate(10000001,tmpSbti);
  }
  if(result.maxVariable === "spirits") {
   tmpSbti = "깔끔하고 묵직하게";
    AxiosApi.sbtiUpdate(10000001,tmpSbti);
  }

  // 이미지나 술 이름 클릭시 해당 상세 페이지로 이동
  const handleOnClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const userInfo = async() => {
      const rsp = await AxiosApi.userNumber("10000001");
      if(rsp.status === 200) setUserInfo(rsp.data);
    }
    userInfo();

    const sbtiInfo  = async() => {
      const rsp = await AxiosApi.sbtiRecommend(tmpSbti);
      if(rsp.status === 200) setSbtiInfo(rsp.data);
    }
    sbtiInfo();
  }, [tmpSbti]);

  return(
    <OutBox>
      <Container>
        <img className="close" src={X} alt="x" onClick={()=>{navigate("/")}}/>
        <div className="usersbti">
          {userInfo.map(user => (
            <div key={user.user_no}>
              <p>{user.user_name}님의 SBTI 결과</p>
              <p>{user.user_sbti}</p>
            </div>
          ))}
        </div>
        <div>
          <p>SBTI 유형에 맞는 추천 전통주</p>
        </div>
        <div className="recommend"> 
          {sbtiInfo.map(({ recImg, recommend }) => (
            <div key={recImg}>
              <div>
                <img src={recImg} alt="추천 1" onClick={handleOnClick} />
              </div>
              <div>
                <p className="sul" onClick={handleOnClick}>{recommend}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="buttonBox">
          <button onClick={()=>navigate('/')}>홈으로</button>
          <button onClick={()=>navigate('/SBTIMain')}>다시하기</button>
        </div>
      </Container>
    </OutBox>
  );
};
export default SBTIResult;