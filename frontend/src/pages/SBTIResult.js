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
  margin: 5%;


`;

const SBTIResult = () => {
  const navigate = useNavigate();

  const [ userInfo, setUserInfo] = useState([]);
  const [ sbtiInfo, setSbtioInfo ] = useState([]);

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
  console.log(result.maxVariable); // 가장 큰 값의 변수명
  console.log(result.secondMaxVariable); // 두 번째로 큰 값의 변수명
  if(result.maxVariable === "takju") userInfo.forEach()



  useEffect(() => {
    const userInfo = async() => {
      const rsp = await AxiosApi.userNumber("10000001");
      if(rsp.status === 200) setUserInfo(rsp.data);
    }
    userInfo();
    const sbtiInfo  = async() => {
      const rsp = await AxiosApi.sbtiResult("10000001");
      if(rsp.status === 200) setUserInfo(rsp.data);
    }
    sbtiInfo();
  }, []);

  return(
    <Container>
      <div>
        {userInfo.map(user => (
          <div key={user.no}>
            <p>{user.name}님의 SBTI 결과: {user.sbti}</p>
          </div>
        ))}
      </div>
      <div>
        <button onClick={()=>navigate('/')}>홈으로</button>
        <button onClick={()=>navigate('/SBTIMain')}>다시하기</button>
      </div>


    </Container>
  );
};
export default SBTIResult;