import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import img1 from '../../src/assets/imgs/Antesinvisalign.webp';
import img2 from '../../src/assets/imgs/Depoisinvisalign.webp';

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
