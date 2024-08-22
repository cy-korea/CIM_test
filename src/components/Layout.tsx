import { FC, memo, ReactNode } from "react";
import styled from "styled-components";
import { LayoutHeader } from "./LayoutHeader";

type ChildrenType = {
  children: ReactNode;
};

const Wrap = styled.main`
  flex-grow: 1;
  height: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  padding: 8px;
`;

export const Layout: FC<ChildrenType> = memo(({ children }) => {
  return (
    <Wrap>
      <LayoutHeader />
      {children}
    </Wrap>
  );
});
