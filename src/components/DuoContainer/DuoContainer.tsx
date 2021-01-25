import {DuoContainer} from './styles';

export default function DouContainer({
  children,
  alignY = 'flex-start',
  background = false,
}: {
  children: React.ReactNode;
  alignY?: string;
  background?: boolean;
}) {
  return (
    <DuoContainer alignY={alignY} background={background}>
      {children}
    </DuoContainer>
  );
}
