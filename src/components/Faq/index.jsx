import styled from "styled-components";
import { Collapse, Button } from "antd";
import { faqData } from "../../data";
const { Panel } = Collapse;

const Faq = () => {
  return (
    <Container id="faq">
      <Wrapper>
        <TitleWrapper>
          <Title>Frequently Asked Questions</Title>
          <SubTitle>Quidem reicies iur aperiam blandsnam</SubTitle>
        </TitleWrapper>
        <Divider />
        <S.Collapse defaultActiveKey={["1"]}>
          {faqData.map((item) => {
            const { id, question, answer } = item;
            return (
              <Panel key={id} header={question}>
                <Answer>{answer}</Answer>
              </Panel>
            );
          })}
        </S.Collapse>
        <QuickSupport>
          <SupportTitle>Want quick support?</SupportTitle>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            velit necessitatibus praesentium aliquid eos in neque recusandae,
            incidunt esse dolore voluptatum nesciunt quod soluta consequuntur
            voluptatibus ab excepturi nobis! Porro!
          </Description>
          <Button type="primary" size="large">
            <IconWrapper>
              <i className="fas fa-envelope"></i> Email your question
            </IconWrapper>
          </Button>
        </QuickSupport>
      </Wrapper>
    </Container>
  );
};

const S = {};

const Container = styled.div`
  margin: 0 0 40px 0;
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

S.Collapse = styled(Collapse)`
  margin: 40px 0;
`;

const Answer = styled.p``;

const QuickSupport = styled.div`
  max-width: 740px;
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SupportTitle = styled.h3`
  text-align: center;
`;

const Description = styled.p``;

const IconWrapper = styled.span`
margin-right: 10px;
`
export default Faq;
