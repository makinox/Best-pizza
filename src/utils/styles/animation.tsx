import {css, keyframes} from 'styled-components';

export const slideIn = ({time = '1s', type = 'ease'} = {}) => css`
  animation: ${time} ${slideInKeyFrames} ${type};
`;

export const loop = ({time = '1s', type = 'infinite linear'} = {}) => css`
  animation: ${time} ${keyLoop} ${type};
`;

const keyLoop = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const slideInKeyFrames = keyframes`
  0% {
    left: 100%;
  }
  100% {
    left: 0%;
  }
`;
