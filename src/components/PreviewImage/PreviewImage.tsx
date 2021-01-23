import {PreviewContainer, PreviewBackgroundImage, PreviewPizzaImage, PreviewPizzaContainer} from './styles';
import PreviewBackground from '../../assets/imagebkg.png';
import PreviewPizza from '../../assets/Pizza.png';

export default function PreviewImage({src = PreviewBackground, animationTime = '0s'}: {src?: string; animationTime?: string}) {
  return (
    <PreviewContainer>
      <PreviewBackgroundImage src={src} alt="Best pizza preview" />
      <PreviewPizzaContainer>
        <PreviewPizzaImage src={PreviewPizza} time={animationTime} />
      </PreviewPizzaContainer>
    </PreviewContainer>
  );
}
