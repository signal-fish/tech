import { useState } from "react";
import { Anchor, Drawer, Button } from "antd";
import styled from "styled-components";
import { navbarData } from "../../data";
import {  laptop, tabletPro } from "../../responsive";

const { Link } = Anchor;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src="assets/tech.jpeg" alt="tech logo" />
          <LogoLink href="#">Tech</LogoLink>
        </LogoWrapper>
        <HideForMobile>
          <Anchor targetOffset="65">
            {navbarData.map((item) => {
              const { id, anchor, name } = item;
              return <Link key={id} href={anchor} title={name} />;
            })}
          </Anchor>
        </HideForMobile>
        <ShowForMobile>
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            onClose={onClose}
            visible={visible}
            closable={false}
          >
            <Anchor targetOffset="65">
              {navbarData.map((item) => {
                const { id, anchor, name } = item;
                return <Link key={id} href={anchor} title={name} />;
              })}
            </Anchor>
          </Drawer>
        </ShowForMobile>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 15px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  && .ant-anchor-wrapper {
    background: none;
  }

  && .ant-anchor {
    display: flex;
  }

  && .ant-anchor-ink {
    display: none;
  }

  && .ant-anchor-link {
    padding: 0 10px;
    line-height: 1.4;
    position: relative;

    ${tabletPro({
      padding: "0 15px",
    })}

    ${laptop({
      padding: "0 20px",
    })}
  }

  && .ant-anchor-link:before,
  && .ant-anchor-link:after {
    content: "";
    background: #1890ff;
    width: 1px;
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: 30%;
    opacity: 0;
    transition: all 0.3s linear;
  }

  && .ant-anchor-link:after {
    left: auto;
    right: 30%;
  }

  && .ant-anchor-link.ant-anchor-link-active:before,
  && .ant-anchor-link:hover:before {
    left: 5%;
    opacity: 1;
  }

  && .ant-anchor-link.ant-anchor-link-active:after,
  && .ant-anchor-link:hover:after {
    right: 5%;
    opacity: 1;
  }
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

const HideForMobile = styled.div`
  display: none;

  ${tabletPro({
    display: "block",
  })}
`;

const ShowForMobile = styled.div`
  display: block;

  ${tabletPro({
    display: "none",
  })}
`;

export default Navbar;
