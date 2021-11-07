import styled from "styled-components";
import { Button, Modal } from "antd";

const Works = () => {
  return (
    <Container id="works">
      <Wrapper>
        <TitleWrapper>
          <Title>How it works</Title>
          <SubTitle>
            Perspiciatis vero similique, ut ducimus modi ipsam autem tempora
          </SubTitle>
        </TitleWrapper>
        <Divider />
        <Content>
          <S.Button size="large">
            <i className="fas fa-play"></i>
          </S.Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

const S = {};

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: url("assets/bg-works.jpg") no-repeat center;
  background-position: 50% 0;
  background-size: cover;
  color: #fff;
  position: relative;

  &:before {
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  z-index:1
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const Title = styled.h2`
  font-size: 30px;
  margin: 0;
  color: #fff;
`;

const SubTitle = styled.h4`
  font-size: 18px;
  font-style: italic;
  margin: 5px 0 20px 0;
  color: #fff;
`;

const Divider = styled.hr`
  height: 4px;
  width: 60px;
  background-color: #1890ff;
  border: none;
`;

const Content = styled.div`
margin: 40px 0 50px 0;
  display: flex;
  justify-content: center;

  
`;

S.Button = styled(Button)`
  font-size: 40px;
  background: none;
  border: 1 px solid #fff;
  color: #fff;
  padding: 30 px;
  border-radius: 50%;
  width: 110px;
  height: 110px;
`;
export default Works;
