import styled from "styled-components";
import { Button, Carousel } from "antd";
import { introductionData } from "../../data";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
const Introduction = () => {
  return (
    <Container id="introduction">
      <Wrapper>
        <Left>
          <CaretLeftOutlined />
        </Left>
        <S.Carousel>
          {introductionData.map((item) => {
            const { id, title, content } = item;
            return (
              <Item key={id}>
                <Content>
                  <Title>{title}</Title>
                  <Text>{content}</Text>
                  <Buttons>
                    <Button type="primary" size="large">
                      Learn More
                    </Button>
                    <Button size="large">
                      <IconWrapper>
                        <i className="fas fa-desktop"></i> Watch a Demo
                      </IconWrapper>
                    </Button>
                  </Buttons>
                </Content>
              </Item>
            );
          })}
        </S.Carousel>
        <Right>
          <CaretRightOutlined />
        </Right>
      </Wrapper>
    </Container>
  );
};

const S = {};

const Container = styled.div`
  background: url("assets/bg.jpg") no-repeat;
  background-position: 50% 100%;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  background: transparent;
  position: relative;
`;

S.Carousel = styled(Carousel)`
  display: flex;
  justify-content: center;
  padding: 0 100px;
  margin: 0;
  & .slick-dots li {
    width: 20px;
    background: #000;
  }

  & .slick-dots li.slick-active {
    width: 25px;
  }

  & .slick-dots li.slick-active button {
    background: #1890ff;
  }
`;

const Item = styled.div`
  display: block;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  padding: 0 0 70px;
`;

const Title = styled.h3`
  font-size: 40px;
  line-height: 1.2;
  margin: 0 0 30px;
`;

const Text = styled.p`
  font-size: 22px;
  margin: 0 0 30px;
`;

const Buttons = styled.div``;

const IconWrapper = styled.span`
  margin-right: 10px;
`;

const Left = styled.div`
  position: absolute;
  color: rgba(0, 0, 0, .6);
  left: 32px;
  top: 50%;
  width: 35px;
  height: 35px;
  font-size: 30px;
  background: #e2dbdb;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: translate(-50%, -50%);

  &:hover {
    opacity: 0.6;
  }
`;

const Right = styled(Left)`
  left: auto;
  right: 0;
`;
export default Introduction;
