import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  return(
    <>
      <button onClick={() => navigate("/SBTIMain")}>SBTI 시작하기</button>
    </>
  );
};
export default Home;