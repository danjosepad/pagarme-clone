import React from 'react';

// Project imports

import logo from './images/logo-pagarme.svg';
import woman from './images/woman.webp';
import { Content, TopHeader, Header, Nav, LoginWrapper, AboutPagarMe, TextInfo } from './styles/content';
import { Span, H1, H6, P1 } from './styles/fonts';
import Button from './components/Button';

function App() {
  return (
   <Content>
     <TopHeader>
       <Span>Já sou Cliente</Span>


       Quero ser cliente:
       <Span>3004-9709</Span>
     </TopHeader>
     <Header>
       <Nav>
         <img src={logo} alt="pagar.me logo" />
         <H6>Soluções</H6>
         <H6>Preços</H6>
         <H6>Blog</H6>
         <H6>Dúvidas</H6>
         <H6>Suporte</H6>
       </Nav>
       <LoginWrapper>
         <H6>Entrar</H6>
          <Button text="Cadastrar agora" />
       </LoginWrapper>
     </Header>

    <AboutPagarMe>
      <TextInfo>
      <H1>O melhor meio de pagamento para você vender online</H1>
      <P1>No Pagar.me, você começa a vender na internet com alta conversão e a segurança que você precisa para crescer o seu negócio.</P1>
      <Button text="Aumente suas vendas" />
      </TextInfo>

      <img src={woman} alt="woman" />
    </AboutPagarMe>
   </Content>
  );
}

export default App;
