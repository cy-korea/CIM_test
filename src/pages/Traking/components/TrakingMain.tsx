import styled from "styled-components";

const Container = styled.div``;

const DataTable = styled.table``;

const Control = styled.div``;

export const TrakingMain = () => {
  return (
    <Container>
      <DataTable>
        <thead>
          <tr>
            <td>TIME</td>
            <td>CEID</td>
            <td>CRST</td>
            <td>AVAIL</td>
            <td>INTER</td>
            <td>MOVE</td>
            <td>RUN</td>
            <td>PORT</td>
            <td>CELL ID</td>
            <td>READER ID</td>
            <td>RRC</td>
            <td>JUDGE</td>
            <td>RESERVED</td>
          </tr>
        </thead>
        <tbody></tbody>
      </DataTable>
      <Control></Control>
    </Container>
  );
};
