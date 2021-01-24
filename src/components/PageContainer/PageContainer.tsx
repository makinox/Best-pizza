import {Container} from './styles';

export default function PageContainer({
  margin,
  children,
  mediaMargin,
  alignItems = 'center',
}: {
  margin: string;
  mediaMargin: string;
  alignItems?: string;
  children: React.ReactNode;
}) {
  return (
    <Container margin={margin} mediaMargin={mediaMargin} alignItems={alignItems}>
      {children}
    </Container>
  );
}
