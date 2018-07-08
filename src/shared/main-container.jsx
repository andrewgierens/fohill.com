import styled from 'react-emotion';
import PropTypes from 'prop-types';

const MainContainer = styled('div')`
  display: flex;
  ${props => () => {
    const { verticalAlign, verticalFlex } = props;
    if ((verticalAlign && verticalFlex)
      || (!verticalAlign && !verticalFlex)
      || (verticalAlign && !verticalFlex)) {
      return 'align-items: center;';
    }

    if ((!verticalAlign && verticalFlex)) {
      return 'justify-content: center;';
    }

    return '';
  }}
  ${props => () => {
    const { verticalFlex } = props;
    return verticalFlex ? 'flex-direction: column;' : '';
  }}
  width: 100%;
  height: 100vh;
  background-color: ${props => () => {
    const { colour } = props;
    return colour;
  }};
`;

MainContainer.propTypes = {
  colour: PropTypes.string.isRequired,
  verticalAlign: PropTypes.bool,
  verticalFlex: PropTypes.bool,
};

MainContainer.defaultProps = {
  verticalAlign: true,
  verticalFlex: false,
};

export default MainContainer;
