import {LargeButtonContainer} from './styles';

export default function LargeButton({text, type = 'button'}: {text: string; type?: 'button' | 'submit' | 'reset'}) {
  return <LargeButtonContainer type={type}>{text}</LargeButtonContainer>;
}
