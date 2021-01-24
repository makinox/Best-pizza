import styled from 'styled-components';
import {PreviewPizzaImageI} from './type';
import {loop} from '../../utils/styles/animation';

export const PreviewContainer = styled.div`
  position: relative;

  @media (max-width: 630px) {
    display: none;
  }
`;

export const PreviewBackgroundImage = styled.img`
  height: 100vh;
  width: 40vw;
`;

export const PreviewPizzaContainer = styled.div`
  transform: translate(-50%, -50%);
  justify-content: center;
  position: absolute;
  display: flex;
  width: 100%;
  left: 50%;
  top: 50%;
`;

export const PreviewPizzaImage = styled.img<PreviewPizzaImageI>`
  transition: 0.3s ease;
  max-height: 500px;
  max-width: 500px;
  width: 90%;

  ${props => loop({time: props.time})}
`;
