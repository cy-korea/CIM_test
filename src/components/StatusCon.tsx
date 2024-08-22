import { FC } from "react";
import styled from "styled-components";

const Con = styled.div<{ $flex: number }>`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  flex: ${(props) => props.$flex};
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  background-color: #96b4d1;
  padding: 8px;
`;

const Status = styled.p`
  background-color: #d7e5f2;
  padding: 8px;
  color: red;
  flex-grow: 1;
`;

export const StatusCon: FC<{
  title: string;
  status?: string;
  num?: number;
}> = ({ title, status, num }) => {
  return (
    <Con $flex={num ? num : 1}>
      <Title>{title}</Title>
      <Status>{status}</Status>
    </Con>
  );
};
