import {css, keyframes} from 'styled-components';

export const loop = ({time = '1s', type = 'ease-in-out infinite backwards'} = {}) => css`
  animation: ${time} ${keyLoop} ${type};
`;

const keyLoop = keyframes`
  100% {
    transform:rotate(360deg);
  }
`;
