import { Link } from "react-router-dom";
import styled from "styled-components";
import { navMenuList } from "../context/navMenu";

const Container = styled.header`
  width: 250px;
  height: 100%;
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-right: 30px;
  padding: 20px;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 50px;
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const NavList = styled.li`
  > a {
    font-weight: 600;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Logo>
        <Link to={"/"}>YSY</Link>
      </Logo>

      <Nav>
        {navMenuList.map((data) => (
          <NavList key={data.title}>
            <Link to={data.path}>{data.title}</Link>
          </NavList>
        ))}
      </Nav>
    </Container>
  );
};
