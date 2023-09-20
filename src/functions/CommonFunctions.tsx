import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const getHeight = function getDimentions(val: any) {
  const result = (val / 100) * height;
  return result;
};

export const getWidth = function getDimentions(val: any) {
  const result = (val / 100) * width;
  return result;
};