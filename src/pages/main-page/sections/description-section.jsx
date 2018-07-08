import React from 'react';
import styled from 'react-emotion';

import Image from '../../../shared/image';
import Header from '../../../shared/header';
import cheeseBoard from '../../../images/2018-07-07 19.56.32.jpg';

const TextSection = styled('p')`
  color: white;
  padding: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: 20px;
`;

const MainContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #52494c;
`;

const LeftSection = styled('div')`
  flex: 1;
  padding: 1rem;
  text-align: center;
`;

const RightSection = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem;
  text-align: center;
`;

const description = `
  Fool on the Hill is a one man organisation providing affordable and unique items perfect for you and your home.
  From cheese boards, to iPhone alarm stands, Fool on the Hill can provide quality, custom designs to suit your requests.
  With unlimmited customisation, you can always get the design you are looking for.
`;

const DescriptionSection = () => (
  <MainContainer>
    <LeftSection>
      <Header>
        What is Fool on the Hill?
      </Header>
      <TextSection>
        { description }
      </TextSection>
    </LeftSection>
    <RightSection>
      <Image src={cheeseBoard} imageText="Cheese Board w/ handle" />
    </RightSection>
  </MainContainer>
);

export default DescriptionSection;
