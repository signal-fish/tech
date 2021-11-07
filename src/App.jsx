import styled from "styled-components";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Features from "./components/Features";
import Works from "./components/Works";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import AppFooter from "./components/Footer"
const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <S.Layout>
      <S.Header>
        <Navbar />
      </S.Header>
      <Content>
        <Introduction />
        <About />
        <Features />
        <Works />
        <Faq />
        <Pricing />
        <Contact />
      </Content>
      <S.Footer>
        <AppFooter />
      </S.Footer>
    </S.Layout>
  );
};

const S = {};

S.Layout = styled(Layout)`
  background: #f8f8f8;
  padding: 0;
  height: auto;
  line-height: 1.6;
`;

S.Header = styled(Header)`
  background: #ece7e7;
  height: 70px;
  position: fixed;
  width: 100vw;
  z-index: 999;
`;

S.Footer = styled(Footer)`
background: #000;
`
export default App;
