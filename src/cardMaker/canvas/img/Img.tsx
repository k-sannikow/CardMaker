import styles from './Img.module.css';
import { Img as ImgType } from '../../../CardMakerTypes';
import { useRef } from 'react';
import {useBlock} from '../useBlock';

type ImgProps = {
  img: ImgType,
}

function Img(props: ImgProps) {
  const img: ImgType = props.img;
  let src: string = '';
  if (img.src) {
    src = img.src;
  }
  const imgStyle = getStyle(img);

  let imgBlock: any = useRef(null);
  const selectId = useBlock(props.img.id, imgBlock);
  const select: string = props.img.id == selectId ? styles.selected : '';

  return (
    <img style={imgStyle}
      src={src}
      ref={imgBlock}
      className={styles.block + ' ' + select} />
  );
}

function getStyle(img: ImgType) {
  return {
    width: img.width,
    height: img.height,
    left: img.posX,
    top: img.posY,
  };
}

export default Img;
