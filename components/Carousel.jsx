import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function ({ children, ...otherProps }) {
  const props = {
    naturalSlideWidth: 100,
    naturalSlideHeight: 75,
    totalSlides: children.length,
    ...otherProps,
  };
  return (
    <CarouselProvider {...props}>
      <Slider>
        {children.map((item, index) => (
          <Slide item={item.key} index={index}>
            {item.content}
          </Slide>
        ))}
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}
