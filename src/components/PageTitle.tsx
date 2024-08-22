import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a5a5a5;
  padding: 4px;
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: bold;
`;

const CSVBtn = styled.button`
  font-weight: bold;
  cursor: pointer;
  padding: 2px;
`;

export const PageTitle: FC<{ title: string }> = ({ title }) => {
  const CSVHandler = () => {
    console.log("엑셀파일 생성~!");
  };

  return (
    <Container>
      <Title>[ {title} ]</Title>
      <CSVBtn onClick={CSVHandler}>Export CSV</CSVBtn>
    </Container>
  );
};
