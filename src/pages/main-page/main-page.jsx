import React from 'react';
import styled, { css } from 'react-emotion';
import { StickyContainer, Sticky } from 'react-sticky';

import DescriptionSection from './sections/description-section';
import MaterialsSection from './sections/materials-sections';
import CustomOrderSection from './sections/custom-order-section';

const wholeContainer = css`
  height: 100%;
`;

const Toolbar = styled('div')`
  display: flex;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  background-color: #262626;
  box-shadow: 0 0.1rem 1rem 0rem black;
  color: white;
  text-alignment: center;
  font-size: 2rem;
`;

const MainPage = () => (
  <StickyContainer style={{ overflowY: 'auto' }} className={wholeContainer}>
    <Sticky relative>
      {({ style }) => (
        <Toolbar style={style}>
          Fool on the Hill
        </Toolbar>
      )}
    </Sticky>
    <div>
      <DescriptionSection />
      <MaterialsSection />
      <CustomOrderSection />
    </div>
  </StickyContainer>
);

export default MainPage;
