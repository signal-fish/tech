import styled from "styled-components";
import { Form, Input, Button, Checkbox } from "antd";
const { TextArea } = Input;

const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <TitleWrapper>
          <Title>Get in Touch</Title>
          <SubTitle>
            Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum
          </SubTitle>
        </TitleWrapper>
        <Divider />
        <S.Form name="normal_login" initialValues={{ remember: true }}>
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please enter your full name!",
              },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item name="telephone">
            <Input placeholder="Telephone" />
          </Form.Item>
          <Form.Item name="subject">
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item name="message">
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Should accept agreement"),
                },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </S.Form>
      </Wrapper>
    </Container>
  );
};

const S = {};

const Container = styled.div`
  && .ant-form textarea {
    height: 150px;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
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

S.Form = styled(Form)`
  padding-top: 30px;
  max-width: 640px;
  margin: auto;
  margin-bottom: 60px;
`;

export default Contact;
