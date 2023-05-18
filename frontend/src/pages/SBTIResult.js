import React, { useEffect, useState} from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";



const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 3%;

  div {
    margin-top: 10px;
  }

  img {
    width: 300px;
    height: 300px;
    cursor: pointer;
  }
  .sul{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  }

  .bottomButton {
    margin-top: 10px;
    display: flex;
    gap: 20px;
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
    <Container>
      <div>
        {userInfo.map(user => (
          <div key={user.user_no}>
            <p>{user.user_name}님의 SBTI 결과: {user.user_sbti}</p>
          </div>
        ))}
      </div>
      <div>
        <p>SBTI 유형에 맞는 추천 전통주</p>
      </div>
      <div> 
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

      <div className="bottomButton">
        <button onClick={()=>navigate('/')}>홈으로</button>
        <button onClick={()=>navigate('/SBTIMain')}>다시하기</button>
      </div>


    </Container>
  );
};
export default SBTIResult;