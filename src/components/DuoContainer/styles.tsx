import styled from 'styled-components';
import {DuoContainerI} from './type';

export const DuoContainer = styled.section<DuoContainerI>`
  background-color: ${props => (props.background ? 'var(--BackgroundColor)' : 'var(--BackgroundSecondary)')};
  align-items: ${props => props.alignY};
  display: flex;
`;
