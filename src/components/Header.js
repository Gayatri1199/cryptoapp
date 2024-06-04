import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useNavigate } from "react-router-dom";
import { CryptoState } from "./CryptoContext";
const HeaderStyle = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  background: red;
  padding: 20px 0px;
  z-index: 1;
`;
const Header = () => {
  const history = useHistory();
  // console.log("UseHIstory==>", history);
  // const [currency, setCurrency] = useState();
  const { currency, setCurrency } = CryptoState();
  // console.log("setCurrency==>", setCurrency);
  // console.log("Crypto State", CryptoState());
  console.log("Currency==>", currency);
  return (
    <HeaderStyle>
      <span
        onClick={() => {
          history.push("/home");
        }}
      >
        {" "}
        Go Back
      </span>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value={"USD"}>USD</option>
        <option value={"INR"}> INR</option>
      </select>
    </HeaderStyle>
  );
};

export default Header;
