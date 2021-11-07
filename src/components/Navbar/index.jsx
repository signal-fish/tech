import { Menu } from "antd";
import styled from "styled-components";
import {navbarData} from "../../data"
const { Item } = Menu;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src="assets/tech.jpeg" alt="tech logo" />
          <LogoLink href="#">Tech</LogoLink>
        </LogoWrapper>
        <S.Menu mode="horizontal">
          {
            navbarData.map(item => {
              const {id, anchor, name} = item
              return (
                <S.Item key={id}>
                  <Link href={anchor}>{name}</Link>
                </S.Item>
              );
            })
          }
        </S.Menu>
        {/* <Button type="primary">
          <i className="fas fa-bars"></i>
        </Button> */}
      </Wrapper>
    </Container>
  );
};

const S = {};
const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 15px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 400;
  display: flex;
  align-items: center;
  padding-right: 50px;
`;

const Logo = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 8px;
`;

const LogoLink = styled.a`
  text-decoration: none;
  color: #000;
`;

S.Menu = styled(Menu)`
  width: auto;
  background: transparent;
  border: none;
  display: flex;
  justify-content: flex-end;
`;

S.Item = styled(Item)`
  font-size: 20px;
`;

const Link = styled.a`
  text-decoration: none;
`;
export default Navbar;
