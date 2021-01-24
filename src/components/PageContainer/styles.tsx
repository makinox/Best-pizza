import styled from 'styled-components';
import {slideIn} from '../../utils/styles/animation';
import {ContainerI} from './type';

export const Container = styled.div<ContainerI>`
  align-items: ${props => props.alignItems};
  margin: ${props => props.margin};
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow-x: auto;
  display: flex;
  width: 100%;

  ${slideIn({time: '.2s'})}

  @media (max-width: 1116px) {
    height: 130vh;
  }

  @media (max-width: 630px) {
    height: 100%;
    margin: ${props => props.mediaMargin};
  }
`;
