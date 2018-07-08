import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const CenteredContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledImage = styled('img')`
  object-fit: cover;
  border: 0.25rem solid #fff;
  border-radius: 4px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  ${props => () => {
    const { fixToWidth } = props;
    return fixToWidth ? 'width: 40rem' : 'height: 40rem';
  }};
`;

const OverlayText = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color: #52494c;
  border-radius: 4px;
  width: 70%;
  height: 2.5rem;
  text-align: center;
  border: 0.1rem solid #fff;
  color: white;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: -1.25rem;
`;

const Image = (props) => {
  const { imageText } = props;

  const imageTextElement = (
    <OverlayText>
      { imageText }
    </OverlayText>
  );

  return (
    <CenteredContainer>
      <StyledImage {...props} />
      { imageText && imageTextElement }
    </CenteredContainer>
  );
};

Image.propTypes = {
  imageText: PropTypes.string,
};

Image.defaultProps = {
  imageText: null,
};

export default Image;
