import {LargeButtonContainer} from './styles';

export default function LargeButton({
  text,
  handleAction,
  type = 'button',
}: {
  text: string;
  handleAction: (e?: any) => void;
  type?: 'button' | 'submit' | 'reset';
}) {
  return (
    <LargeButtonContainer onClick={handleAction} onSubmit={handleAction} type={type}>
      {text}
    </LargeButtonContainer>
  );
}
