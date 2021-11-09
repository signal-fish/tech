import styled from "styled-components";
import { Button, Carousel } from "antd";
import { introductionData } from "../../data";
import { tablet } from "../../responsive";

const Introduction = () => {
  return (
    <Container id="introduction">
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
    </Container>
  );
};

const S = {};

const Container = styled.div`
  background: url("assets/bg.jpg") no-repeat;
  background-position: 50% 100%;
  background-size: cover;
  height: 100vh;
  margin-bottom: 3px;

  && .ant-carousel,
  && .ant-carousel div {
    height: 100%;
  }
`;

S.Carousel = styled(Carousel)`
  height: 100%;

  & .slick-dots li {
    width: 22px;
    background: #000;
  }

  & .slick-dots li.slick-active {
    width: 28px;
  }

  & .slick-dots li.slick-active button {
    background: #1890ff;
  }
`;

const Item = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: block !important;
`;

const Content = styled.div`
  max-width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${tablet({
    padding: "0 0 70px",
  })}
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 1.2;
  margin: 0 0 30px;

  ${tablet({
    fontSize: "35px"
  })}
`;

const Text = styled.p`
  font-size: 16px;
  margin: 0 0 30px;

  ${tablet({
    fontSize: "22px",
  })}
`;

const Buttons = styled.div`
  height: auto !important;
`;

const IconWrapper = styled.span`
  margin-right: 10px;
`;

export default Introduction;
