import {Container} from './styles';

export default function PageContainer({
  margin,
  children,
  scrollView,
  mediaMargin,
  alignItems = 'center',
}: {
  margin: string;
  scrollView: boolean;
  mediaMargin: string;
  alignItems?: string;
  children: React.ReactNode;
}) {
  return (
    <Container margin={margin} mediaMargin={mediaMargin} alignItems={alignItems} scrollView={scrollView}>
      {children}
    </Container>
  );
}
