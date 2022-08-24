import styled from "styled-components";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.header`
  align-items: center;
  background: #020203;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  display: flex;
  height: 91px;
`;

const Logo = styled.img`
  height: 61px;
  width: 178px;
  object-fit: cover;
  object-position: center;
  margin-left: 29px;
`;

const Nav = styled.nav`
  flex-grow: 1;
`;

const List = styled.ul`
  color: white;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const Item = styled.li`
  padding: 0.5rem;
`;

const Link = styled(NavLink)`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  &:hover {
    color: red;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="logo Sportsee"></Logo>
      <Nav>
        <List>
          <Item>
            <Link to="#">Accueil</Link>
          </Item>
          <Item>
            <Link to="#">Profil</Link>
          </Item>
          <Item>
            <Link to="#">Réglage</Link>
          </Item>
          <Item>
            <Link to="#">Communauté</Link>
          </Item>
        </List>
      </Nav>
    </HeaderWrapper>
  );
}
export default Header;
