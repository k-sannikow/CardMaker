import styles from './NavLinkButton.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ForwardedRef, forwardRef } from 'react';

type NavLinkButtonProps = {
  label: string,
  icon: IconDefinition,
}

const NavLinkButton = forwardRef((props: NavLinkButtonProps, ref: ForwardedRef<HTMLAnchorElement>) => (
  <a
    ref={ref}
    className={styles.button}>
    <FontAwesomeIcon icon={props.icon} />
    {props.label !== '' &&
      <span className={styles.button__text}>{props.label}</span>
    }
  </a>
));

export default NavLinkButton;