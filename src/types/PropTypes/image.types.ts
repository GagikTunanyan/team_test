export interface ImagePropTypes {
  src: string;
  alt: string;
  defaultSrc?: string;
  desc?: string;
  onClickDesc?: CallableFunction;
  onClickImg?: CallableFunction;
}
