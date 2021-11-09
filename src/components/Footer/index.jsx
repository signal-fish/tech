import styled from "styled-components";
import { BackTop } from "antd";
import { footerData } from "../../data";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src="assets/tech.jpeg" />
          <Link href="#">Tech</Link>
        </LogoWrapper>
        <Socials>
          {footerData.map((item) => {
            const { id, icon, link } = item;
            return (
              <Social key={id}>
                <SocialLink href={link}>
                  {icon}
                </SocialLink>
              </Social>
            );
          })}
        </Socials>
        <CopyRight>Copyright &copy; 2021 Tech</CopyRight>
        <BackTop>
          <GoTop>
            <i className="fas fa-arrow-circle-up"></i>
          </GoTop>
        </BackTop>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Logo = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 5px;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 26px;
  text-transform: uppercase;
`;

const Socials = styled.ul`
  margin: 20px 0;
  display: flex;
  padding: 0;
  list-style: none;
`;

const Social = styled.li``;

const SocialLink = styled.a`
  font-size: 26px;
  padding: 0 20px;
  color: #fff;
`;

const CopyRight = styled.div`
  color: #fff;
  text-align: center;
  margin: 20px 0 30px 0;
`;

const GoTop = styled.div`
  font-size: 26px;
  color: #1890ff;

  &:hover {
    opacity: 0.8;
  }
`;
export default Footer;
