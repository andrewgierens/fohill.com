import React from 'react';
import styled from 'react-emotion';
import { Image } from 'semantic-ui-react';

import Header from '../../../shared/header';
import cheeseBoard from '../../../images/2018-07-07 19.56.32.jpg';

const TextSection = styled('p')`
  color: white;
  padding: 3rem;
  font-size: 20px;
`;

const MainContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #597f8a;
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

const ImageWithFit = styled(Image)`
  object-fit: cover;
  height: 30rem;
  width: 30rem;
`;

const lorum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et hendrerit est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sed congue nibh, vitae rhoncus neque. Sed sodales rhoncus ante ut dictum. Aenean a feugiat diam. Integer mollis tincidunt mi. Cras vel tortor mi. Nullam lacinia ornare augue non fringilla. Aenean lobortis non dolor quis luctus.'; // eslint-ignore-line

const MaterialsSection = () => (
  <MainContainer>
    <LeftSection>
      <ImageWithFit src={cheeseBoard} bordered rounded />
    </LeftSection>
    <RightSection>
      <Header>
        What is Fool on the Hill?
      </Header>
      <TextSection>
        { lorum }
      </TextSection>
    </RightSection>
  </MainContainer>
);

export default MaterialsSection;
