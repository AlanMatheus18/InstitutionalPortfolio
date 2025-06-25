import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import img1 from '../../src/assets/imgs/antes-1.webp';
import img2 from '../../src/assets/imgs/depois-_1_.webp';

export function Result({ imgAntes, imgDps }: { imgAntes: string; imgDps: string }) {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={imgAntes} alt="Antes" className="h-[280px] w-full object-cover rounded-xl" />}
      itemTwo={<ReactCompareSliderImage src={imgDps} alt="Depois" className="h-[280px] w-full object-cover rounded-xl" />}
      className="rounded-xl"
    />
  );
}
