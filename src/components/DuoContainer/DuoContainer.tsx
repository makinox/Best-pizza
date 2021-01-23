import {DuoContainer} from './styles';

export default function DouContainer({children, alignY = 'flex-start'}: {children: React.ReactNode; alignY?: string}) {
  return <DuoContainer alignY={alignY}>{children}</DuoContainer>;
}
