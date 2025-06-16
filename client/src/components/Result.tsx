import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import img1 from '../../src/assets/imgs/ANTES.webp'
import img2 from '../../src/assets/imgs/DEPOIS.webp'

export const Result = () => {
  return (
    <ReactCompareSlider
      transition='500ms'
      itemOne={<ReactCompareSliderImage src={img1}  alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={img2}  alt="Image two" />}
    />
  );
};