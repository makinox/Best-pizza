import styled from 'styled-components';
import {PreviewPizzaImageI} from './type';
import {loop} from '../../animation';

export const PreviewContainer = styled.div`
  position: relative;
`;

export const PreviewBackgroundImage = styled.img`
  height: 100vh;
  width: 40vw;
`;

export const PreviewPizzaContainer = styled.div`
  transform: translate(-50%, -50%);
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
`;

export const PreviewPizzaImage = styled.img<PreviewPizzaImageI>`
  max-height: 500px;
  max-width: 500px;
  width: 90%;

  ${props => loop({time: props.time})}
`;
