import styles from './AddImgButtonFile.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ForwardedRef, forwardRef } from 'react';

type NavButtonProps = {
  label: string,
  title: string,
  icon: IconDefinition,
}

const AddImgButton = forwardRef((props: NavButtonProps, ref: ForwardedRef<HTMLInputElement>) => (
  <button className={styles.button}>
    <label htmlFor="input-file-img" className={styles.icon}>
      <FontAwesomeIcon icon={props.icon} size="lg" />
    </label>
    <input
      className={styles.inputFile}
      type="file"
      ref={ref}
      id="input-file-img"
    />
    {props.label !== '' &&
      <label className={styles.button__text}
        htmlFor="input-file-img">
        {props.label}
      </label>
    }
  </button>
));

export default AddImgButton;