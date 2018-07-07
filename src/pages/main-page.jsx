import React from 'react';
import styled, { css } from 'react-emotion';
import { StickyContainer, Sticky } from 'react-sticky';

const wholeContainer = css`
  height: 100%;
`;

const ContentContainer = styled('div')`
  background-color: #52494c;
  height: 100%;
`;

const Toolbar = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: #262626;
  box-shadow: 0 2px 8px 0px black;
  color: white;
  text-alignment: center;
  font-size: 25px;
`;

const MainPage = () => (
  <StickyContainer className={wholeContainer}>
    <Sticky>{({ style }) => <Toolbar style={style}>Fool on the Hill</Toolbar>}</Sticky>
    <ContentContainer>
      
    </ContentContainer>
  </StickyContainer>
);

export default MainPage;