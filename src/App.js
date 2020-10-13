import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';

// Project imports

import logo from './images/logo-pagarme.svg';
import woman from './images/woman.webp';
import imagewaves from './images/imagewaves.svg';
import points from './images/points.svg';
import largewaves from './images/largewaves.svg';

import macbook from './images/macbook.webp';
import magazineluiza from './images/magazineluizalogo.svg';
import ricardoeletro from './images/ricardoeletrologo.svg';
import maxmilhas from './images/maxmilhaslogo.svg';
import james from './images/jameslogo.svg';
import wedy from './images/wedylogo.svg';
import grupoysa from './images/grupoysalogo.svg';
import manComputer from './images/bg-man-computer.png';

// Partners logo

import vtexlogo from './images/vtexlogo.png';
import opencartlogo from './images/opencartlogo.png';
import irrobalogo from './images/irrobalogo.png';
import vndalogo from './images/vndalogo.png';
import edoolslogo from './images/edoolslogo.png';
import dlojavirtuallogo from './images/dlojavirtuallogo.png';
import bis2bislogo from './images/bis2bislogo.png';
import betalabslogo from './images/betalabslogo.png';
import lojaintegradalogo from './images/lojaintegradalogo.png';
import woocommercelogo from './images/woocommercelogo.png';
import prestashoplogo from './images/prestashoplogo.png';
import magentologo from './images/magentologo.png';

import {
  Content,
  TopHeader,
  Header,
  Nav,
  LoginWrapper,
  FlexContent,
  TextInfo,
  ParntersLogoContent,
  FlexImageContent,
  ImageContent,
  Line,
  PointsImage,
  WavesImage,
  MacbookImage,
  LargeWaves,
  WomanImage,
  PaymentContent,
  PartnersContent,
  FlexRowContent
} from './styles/content';
import { Span, H1, H6, P1 } from './styles/fonts';
import Button from './components/Button';
import { colors } from './styles/theme';

import './global.css';
// Styled components

const StyledH1 = styled(H1)`
  width: 90%;
  ${ ({ baseColor }) => baseColor && `
    color: ${baseColor}
  `}

  ${ ({ color }) => color && `
  span {
    color: ${color}
  }
  `}
`;

const StyledP1 = styled(P1)`
  width: 70%;
  color: ${ ({ color }) => color ? color : colors.blueDark};
`;


const linearWhite = 'linear-gradient(rgb(243, 244, 245) 0%, rgb(255, 255, 255) 100%)';



function App() {
  const definedPartners = [
    {
      src: vtexlogo,
      alt: 'vtex logo',
    },
    {
      src: opencartlogo,
      alt: 'opencart logo',
    },
    {
      src: irrobalogo,
      alt: 'irroba logo',
    },
    {
      src: vndalogo,
      alt: 'vnda logo',
    },
    {
      src: edoolslogo,
      alt: 'opencart logo',
    },
    {
      src: dlojavirtuallogo,
      alt: 'dlojavirtual logo',
    },
    {
      src: bis2bislogo,
      alt: 'bis2bis logo',
    },
    {
      src: betalabslogo,
      alt: 'betalabs logo',
    },
    {
      src: lojaintegradalogo,
      alt: 'lojaintegrada logo',
    },
    {
      src: woocommercelogo,
      alt: 'woocommerce logo',
    },
    {
      src: prestashoplogo,
      alt: 'prestashop logo'
    },
    {
      src: magentologo,
      alt: 'magento logo',
    },
  ];

  const [partnersLoop, setPartnersLoop] = useState(1);
  const [partners, setPartners] = useState(R.take(4, definedPartners));

  useEffect(() => {
    const interval = setInterval(() => {
      switch(partnersLoop) {
        case 1:
          setPartners(R.take(4, definedPartners))
          break;
        case 2:
          setPartners(definedPartners.slice(4,8))
          break;
        case 3:
          setPartners(R.takeLast(4, definedPartners))
          break;
      }
      if (partnersLoop < 3) {
        setPartnersLoop(partner => partner + 1)
      }

      if (partnersLoop === 3) {
        setPartnersLoop(1);
      }
    }, 3000);

    return () => clearInterval(interval)
  }, [partnersLoop])

  return (
    <>
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

    <FlexContent>
      <TextInfo>
        <StyledH1>O melhor meio de pagamento para você vender online</StyledH1>
        <StyledP1>
          No Pagar.me, você começa a vender na internet com alta conversão e a segurança que você precisa para crescer o seu negócio.
        </StyledP1>
        <Button text="Aumente suas vendas" />
      </TextInfo>

    <ImageContent>
      <PointsImage src={points} alt="points"/>
      <WomanImage src={woman} alt="woman" />
      <WavesImage src={imagewaves} alt="waves"/>
    </ImageContent>

    </FlexContent>
    <ParntersLogoContent>
      <img src={magazineluiza} alt="magazine luiza logo" />
      <img src={ricardoeletro} alt="ricardo eletro logo" />
      <img src={maxmilhas} alt="maxmilhas logo" />
      <img src={james} alt="jameslogo" />
      <img src={wedy} alt="wedy logo" />
      <img src={grupoysa} alt="grupoysa logo" />
    </ParntersLogoContent>
    </Content>
    <FlexContent bgColor={linearWhite}>
      <PaymentContent>
        <ImageContent>
        <LargeWaves src={largewaves} alt="waves" />
        <MacbookImage src={macbook} alt="macbook" />
        </ImageContent>


        <TextInfo>

        <StyledH1 color={colors.purple}>
          <Line />
          Receba pagamentos e gerencie as suas vendas <span>em um só lugar.</span>
        </StyledH1>
        <StyledP1>
          Aumente as suas vendas oferecendo, no seu site ou app, a melhor experiência para pagamentos por cartão de crédito e boleto bancário.
        </StyledP1>
        <StyledP1>
          Fazemos toda a comunicação com as bandeiras, bancos e demais serviços no meio do caminho e você ainda acompanha todas as suas vendas na nossa dashboard.
        </StyledP1>
        <Button text="Aumente suas vendas" bgColor={colors.purple} />
        </TextInfo>
      </PaymentContent>
    </FlexContent>

   <FlexImageContent url={manComputer}>
     <Content>
      <TextInfo>
        <StyledH1 baseColor={colors.white}>
          <Line color={colors.primary} />
          Para quem já vende online ou quer começar
          </StyledH1>
        <StyledP1 color={colors.white}>
          Nosso checkout transparente é compatível com as principais plataformas de e-commerce, assim você tem mais facilidade na hora de habilitar o recebimento no seu site ou app sem precisar de conhecimento técnico.
        </StyledP1>
        <Button text="Confira nossos parceiros" />
      </TextInfo>
     </Content>
  </FlexImageContent>
  <PartnersContent>
    <FlexRowContent>
      {partners.map(partner => (
        <img src={partner.src} alt={partner.alt} />
      ))}
    </FlexRowContent>
  </PartnersContent>
 </>
  );
}

export default App;
