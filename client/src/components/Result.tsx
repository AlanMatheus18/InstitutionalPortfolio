import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import img1 from '../../src/assets/imgs/antes-1.webp';
import img2 from '../../src/assets/imgs/depois-_1_.webp';

export const Result = () => {
  return (
    <ReactCompareSlider
      transition="500ms"
      itemOne={<ReactCompareSliderImage src={img1} alt="Antes" />}
      itemTwo={<ReactCompareSliderImage src={img2} alt="Depois" />}
    />
  );
};
