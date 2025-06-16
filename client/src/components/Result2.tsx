import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import img3 from '../../src/assets/imgs/ANTESIN.jpg'
import img4 from '../../src/assets/imgs/DPSIN.jpg'

export const Result2 = () => {
  return (
    <ReactCompareSlider
      transition='500ms'
      itemOne={<ReactCompareSliderImage src={img3}  alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={img4}  alt="Image two" />}
    />
  );
};