import styled from "styled-components";
import { Connection } from "./Connection";
import { ControlStatus } from "./ControlStatus";
import { Title } from "./Title";

const Container = styled.div`
  display: flex;
  column-gap: 5px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const LayoutHeader = () => {
  return (
    <Container>
      <Title />
      <Connection />
      <ControlStatus />
    </Container>
  );
};
