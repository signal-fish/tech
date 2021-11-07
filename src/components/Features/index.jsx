import styled from "styled-components";
import { Row, Col, Card } from "antd";
import { featureData } from "../../data";
const { Meta } = Card;

const Features = () => {
  return (
    <Container id="tofeatures">
      <Wrapper>
        <TitleWrapper>
          <Title>Key Features and Benefits</Title>
          <SubTitle>Obcaeci conbero redian taque labo</SubTitle>
        </TitleWrapper>
        <Divider />
        <S.Row gutter={[16, 16]}>
          {featureData.map((item) => {
            const { id, title, img } = item;
            return (
              <Col
                key={id}
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
              >
                <Card hoverable cover={<img alt={title} src={img} />}>
                  <Meta title={title} />
                </Card>
              </Col>
            );
          })}
        </S.Row>
      </Wrapper>
    </Container>
  );
};

const S = {};

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #f2f2f2;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

S.Row = styled(Row)`
  margin: 40px 0 60px 0;
`;
export default Features;
