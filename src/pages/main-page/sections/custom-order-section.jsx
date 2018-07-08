import React from 'react';
import Formsy from 'formsy-react';

import MainContainer from '../../../shared/main-container';
import Header from '../../../shared/header';
import styled from '../../../../node_modules/react-emotion';

const ExtraPaddedHeader = styled(Header)`
  padding-top: 7rem;
`;

const FormSection = styled('div')`
  display: flex;
  width: 60%;
  height: 70%;
  flex-direction: column;
  border: 0.1rem solid #fff;
  border-radius: 4px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledInput = styled('input')`
  width: 50%;
  height: 3rem;
  margin: 0.5rem;
  border-radius: .25rem;
  border: 0;
  padding: 1rem;
`;

const StyledTextArea = styled('textarea')`
  width: 50%;
  height: 15rem;
  margin: 0.5rem;
  border-radius: .25rem;
  border: 0;
  padding: 1rem;
`;

const StyledFormsy = styled(Formsy)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const StyledButton = styled('button')`
  width: 12rem;
  height: 3rem;
  background-color: #2185d0;
  border: 0.1rem solid #2185d0;
  color: #FFFFFF;
  border-radius: .25rem;
  margin: 0.5rem;
`;

const onSubmit = () => {

};

const CustomOrderSection = () => (
  <MainContainer colour="#6c5840" verticalFlex>
    <ExtraPaddedHeader>
      Need a custom order?
    </ExtraPaddedHeader>
    <FormSection>
      <StyledFormsy onValidSubmit={onSubmit}>
        <Header>
          Please fill out a custom order form
        </Header>

        <StyledInput
          type="text"
          name="name"
          placeholder="What's your name?"
        />

        <StyledInput
          type="text"
          name="email"
          validation="isEmail"
          placeholder="What's your email address?"
        />
        <StyledTextArea
          placeholder="Please enter your custom order details..."
        />
        <StyledButton type="submit">
          Submit
        </StyledButton>
      </StyledFormsy>
    </FormSection>
  </MainContainer>
);

export default CustomOrderSection;
