import styled from "styled-components";
import { setColor } from "../style/color";
import { useState } from "react";

const Container = styled.div`
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  padding: 3px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  flex: 0.3;
`;

const TitleCon = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3px;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-right: 5px;
  font-weight: bold;
`;

const StatusColor = styled.div`
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid ${setColor.textColor};
  transform: translateY(1px);
  padding: 2px;

  div {
    width: 100%;
    height: 100%;
    background-color: green;
    border-radius: 50%;
  }

  &:last-child div {
    background-color: red;
  }
`;

const HostCon = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  font-weight: bold;
`;

const HostTitle = styled.h4``;

const State = styled.p`
  color: red;
  width: 26.2px;
`;

const InitializeBtn = styled.button`
  margin-left: 8px;
  padding: 2px;
  cursor: pointer;
`;

const EQCon = styled.div`
  display: flex;
  column-gap: 5px;
  font-weight: bold;
`;

const EQTitle = styled.h4``;

export const Connection = () => {
  const [test, setTest] = useState("ON");

  const initializeHandler = () => {
    test === "ON" ? setTest("OFF") : setTest("ON");
  };

  return (
    <Container>
      <TitleCon>
        <Title>CONNECTION</Title>
        <StatusColor>
          <div />
        </StatusColor>
        <StatusColor>
          <div />
        </StatusColor>
      </TitleCon>

      <HostCon>
        <HostTitle>Host (TC) : </HostTitle>
        <State>{test}</State>
        <InitializeBtn onClick={initializeHandler}>Initialize TC</InitializeBtn>
      </HostCon>

      <EQCon>
        <EQTitle>EQ (PLC) : </EQTitle>
        <State>OFF</State>
        <span>,</span>
        <State>OFF</State>
        <span>,</span>
        <State>OFF</State>
      </EQCon>
    </Container>
  );
};
