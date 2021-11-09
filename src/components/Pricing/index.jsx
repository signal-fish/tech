import styled from "styled-components";
import { List, Card, Button } from "antd";
import { pricingData } from "../../data";
import { tablet } from "../../responsive";
const Pricing = () => {
  return (
    <Container id="pricing">
      <Wrapper>
        <TitleWrapper>
          <Title>Choose a plan to fit your needs</Title>
          <SubTitle>Debitis itaque minima dolorum fuga aidem enim</SubTitle>
        </TitleWrapper>
        <Divider />
        <S.List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={pricingData}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>
                <Price>{item.content[0].price}</Price>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
                <Button type="primary" size="large">
                  <IconWrapper>
                    <i className="fab fa-telegram-plane"></i>
                  </IconWrapper>
                  Get Started
                </Button>
              </Card>
            </List.Item>
          )}
        />
      </Wrapper>
    </Container>
  );
};

const S = {};
const Container = styled.div`
  background: #ebebeb;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 60px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const Title = styled.h2`
  font-size: 30px;
  margin: 0;
`;

const SubTitle = styled.h4`
  font-size: 18px;
  font-style: italic;
  margin: 5px 0 20px 0;
`;

const Divider = styled.hr`
  height: 4px;
  width: 60px;
  background-color: #1890ff;
  border: none;
`;

S.List = styled(List)`
  margin-top: 40px;
  text-align: center;

  && .ant-card-head-title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 400;
  }

  && .ant-row > div:nth-child(2) .ant-list-item {
    box-shadow: 0 0 12px 2px #f3f3f3;
    transform: scale(1.1);
    position: relative;
    z-index: 1;

    ${tablet({
      transform: "scale(1)",
    })}
  }
`;

const IconWrapper = styled.span`
  margin-right: 10px;
`;

const Price = styled.p`
  font-size: 38px;
  line-height: 1;
  margin: 0 0 20px;
`;
export default Pricing;
