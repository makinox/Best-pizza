import styled from 'styled-components';
import {DuoContainerI} from './type';

export const DuoContainer = styled.section<DuoContainerI>`
  align-items: ${props => props.alignY};
  display: flex;
`;
