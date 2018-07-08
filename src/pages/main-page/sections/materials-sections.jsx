import React from 'react';
import styled from 'react-emotion';
import Image from '../../../shared/image';
import Header from '../../../shared/header';
import MainContainer from '../../../shared/main-container';
import clock from '../../../images/iphone-clock.jpg';

const TextSection = styled('p')`
  color: white;
  padding: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: 20px;
`;
const LeftSection = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem;
  text-align: center;
`;

const RightSection = styled('div')`
  flex: 1;
  padding: 1rem;
  text-align: center;
`;
const description = `
  Our products are made from locally grown, locally sourced timber from the Gippsland region.
  Items are crafted, hand polished and shipped directly to you, with love, by one fool on a hill.

  All items are created with locally sources timber but can also be customised to any material of your choice.
  Pricing changes may apply depending on the chosen material. Use our online quote system to help you out.
`;

const MaterialsSection = () => (
  <MainContainer colour="#597f8a">
    <LeftSection>
      <Image
        src={clock}
        fixToWidth
        imageText="iPhone alarm clock stand"
        imageTextBackground="#597f8a"
      />
    </LeftSection>
    <RightSection>
      <Header>
        What are our products made from?
      </Header>
      <TextSection>
        { description }
      </TextSection>
    </RightSection>
  </MainContainer>
);

export default MaterialsSection;
