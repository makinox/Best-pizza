import {Container} from './styles';

export default function CardContainer({children, dataCy = 'card-container'}: {children: React.ReactNode; dataCy?: string}) {
  return <Container data-cy={dataCy}>{children}</Container>;
}
