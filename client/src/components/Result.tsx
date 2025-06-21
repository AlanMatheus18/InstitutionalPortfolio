import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import img1 from '../../src/assets/imgs/antes-1.webp';
import img2 from '../../src/assets/imgs/depois-_1_.webp';

export const Result = ({ imgAntes, imgDps }) => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <ReactCompareSlider
        transition="500ms"
        itemOne={<ReactCompareSliderImage src={imgAntes} alt="Antes"  />}
        itemTwo={<ReactCompareSliderImage src={imgDps} alt="Depois"  />}
      />
    </div>
  );
};
