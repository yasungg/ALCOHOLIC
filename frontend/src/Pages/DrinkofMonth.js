import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import HeaderDesign from "../HeaderDesign";
import FooterDesign from "../FooterDesign";
import { UpBtn } from "../component/ReusableComponents";

const Container = styled.div`

`;

const DrinkofMonth = () => {


  return(
    <Container>
      <HeaderDesign />



      <FooterDesign />
    </Container>
  );
};
export default DrinkofMonth;