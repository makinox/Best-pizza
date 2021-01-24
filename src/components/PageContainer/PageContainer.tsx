import {Container} from './styles';

export default function PageContainer({
  padding,
  children,
  scrollView,
  mediaMargin,
  alignItems = 'center',
  dataCy = 'page-container',
}: {
  padding: string;
  dataCy?: string;
  scrollView: boolean;
  mediaMargin: string;
  alignItems?: string;
  children: React.ReactNode;
}) {
  return (
    <Container padding={padding} mediaMargin={mediaMargin} alignItems={alignItems} scrollView={scrollView} data-cy={dataCy}>
      {children}
    </Container>
  );
}
