import styled from "styled-components";
import { Row, Col } from "antd";
import { aboutData } from "../../data";

const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <TitleWrapper>
          <Title>About Us</Title>
          <SubTitle>dolor sit tetur adipisicing elit</SubTitle>
        </TitleWrapper>
        <Divider />
        <DescriptionWrapper>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            necessitatibus officiis repudiandae est deserunt delectus dolorem
            iure porro distinctio fuga, nostrum doloremque. Facilis porro in
            laborum dolor amet ratione hic? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Magnam aut a porro, adipisci quidem
            sint enim pariatur ducimus, saepe voluptatibus inventore commodi!
            Quis, explicabo molestias libero tenetur temporibus perspiciatis
            deserunt.
          </Description>
        </DescriptionWrapper>
        <Row gutter={[16]}>
          {aboutData.map((item) => {
            const { id, icon, title, content } = item;
            return (
              <Col key={id} md={{span: 8}}>
                <Item>
                  <Icon>{icon}</Icon>
                  <ItemTitle>{title}</ItemTitle>
                  <ItemContent>{content}</ItemContent>
                </Item>
              </Col>
            );
          })}
        </Row>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin: 0 0 50px;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const TitleWrapper = styled.div`
  text-align: center;
  padding: 0 0 10px;
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

const DescriptionWrapper = styled.div`
  text-align: center;
  margin: 30px 0 50px 0;
`;

const Description = styled.p``;

const Item = styled.div`
  text-align:center
`;

const Icon = styled.div`
  color: #1890ff;
  font-size: 40px;
`;

const ItemTitle = styled.h3``;

const ItemContent = styled.p`
  text-align: center;

`;

export default About;
