import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import img1 from '../../src/assets/imgs/ANTESINP.webp';
import img2 from '../../src/assets/imgs/DPSIMP.webp';

export const Result = () => {
  return (
    <ReactCompareSlider
      transition="500ms"
      itemOne={<ReactCompareSliderImage src={img1} alt="Antes" />}
      itemTwo={<ReactCompareSliderImage src={img2} alt="Depois" />}
    />
  );
};
