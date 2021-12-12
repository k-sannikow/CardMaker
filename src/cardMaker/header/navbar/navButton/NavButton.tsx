import styles from './NavButton.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ForwardedRef, forwardRef } from 'react';
import { connect } from 'react-redux';

type NavButtonProps = {
  label: string,
  icon: IconDefinition,
}

const NavButton = forwardRef((props: NavButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
  <button
    className={styles.button}
    ref={ref}>
    <FontAwesomeIcon icon={props.icon} />
    {props.label !== '' &&
      <span className={styles.button__text}>{props.label}</span>
    }
  </button>
));

export default connect(null, null, null, { forwardRef: true })(NavButton);