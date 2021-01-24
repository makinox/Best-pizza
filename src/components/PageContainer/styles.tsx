import styled from 'styled-components';
import {ContainerI} from './type';

export const Container = styled.div<ContainerI>`
  align-items: ${props => props.alignItems};
  margin: ${props => props.margin};
  justify-content: center;
  flex-direction: column;
  display: flex;
  width: 100%;

  @media (max-width: 630px) {
    margin: ${props => props.mediaMargin};
  }
`;
