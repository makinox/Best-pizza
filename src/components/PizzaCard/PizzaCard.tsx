import {StoreI} from '../../utils/interfaces/Store';
import Img1 from '../../assets/Panos_pizza.png';
import Img2 from '../../assets/Sbarro.png';
import Img3 from '../../assets/pizzeria_camion.png';
import Img4 from '../../assets/voglia_di_pizza.png';
import Img5 from '../../assets/stroller_pizza.png';
import Img6 from '../../assets/trulli.png';

const Images = [Img1, Img2, Img3, Img4, Img5, Img6];

export default function PizzaCard({store}: {store: StoreI}) {
  return (
    <article>
      <img src={Images[(store.id || 1) - 1]} alt={`${store.name} store`} />
      <h6>{store.name}</h6>
      <span>{store.address}</span>
    </article>
  );
}
