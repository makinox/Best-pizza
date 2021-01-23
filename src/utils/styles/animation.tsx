import {css, keyframes} from 'styled-components';

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
