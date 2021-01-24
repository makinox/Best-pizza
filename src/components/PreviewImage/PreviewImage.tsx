import {PreviewContainer, PreviewBackgroundImage, PreviewPizzaImage, PreviewPizzaContainer} from './styles';
import PreviewBackground from '../../assets/imagebkg.png';
import PreviewPizza from '../../assets/Pizza.png';

export default function PreviewImage({
  animationTime = '0s',
  src = PreviewBackground,
  dataCy = 'preview-image',
}: {
  src?: string;
  dataCy?: string;
  animationTime?: string;
}) {
  return (
    <PreviewContainer data-cy={dataCy}>
      <PreviewBackgroundImage src={src} alt="Best pizza preview" />
      <PreviewPizzaContainer>
        <PreviewPizzaImage src={PreviewPizza} time={animationTime} />
      </PreviewPizzaContainer>
    </PreviewContainer>
  );
}
