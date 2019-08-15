import React from 'react';
import tagComponent from '../../../../utils/helpers/tags/tags';
import { SlideStyle } from './slide.style';

const Slide = (props) => {
  return (
    <SlideStyle { ...props } { ...tagComponent('slide', props) } />
  );
};

export default Slide;
