import styled from "styled-components";
import { StatusCon } from "./StatusCon";

const Container = styled.div`
  /* box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3); */
  /* border-radius: 5px; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  height: 100%;
  flex: 1;
`;

const Wrap = styled.div`
  display: flex;
  column-gap: 5px;
`;

export const ControlStatus = () => {
  return (
    <Container>
      <Wrap>
        <StatusCon title="CONTROL STATE" status="ERROR(0x00)" />
        <StatusCon title="AVAILABILITY" status="ERROR(0x00)" />
        <StatusCon title="INTERLOCK" status="ERROR(0x00)" />
        <StatusCon title="MOVE" status="ERROR(0x00)" />
        <StatusCon title="RUN" status="ERROR(0x00)" />
      </Wrap>
      <Wrap>
        <StatusCon title="FRONT" status="ERROR(0x00)" />
        <StatusCon title="REAR" status="ERROR(0x00)" />
        <StatusCon title="PP / SPL" status="ERROR(0x00)" />
        <StatusCon title="CURRENT RECIPE" num={2.02} />
      </Wrap>
    </Container>
  );
};
