import { dcnb } from 'cnbuilder';
import * as styles from './Cta.styles';

export const getCtaClasses = (variant, size, className, disabled = null) => {
  let ctaSize = '' as keyof typeof styles.ctaSizes;

  switch (variant) {
    case 'primary':
    case 'secondary':
    case 'cancel':
    case 'ghost':
      ctaSize = size || 'default';
      break;
    case 'footer':
      ctaSize = size || 'footer';
      break;
    case 'footer-featured':
      ctaSize = size || 'footer-featured';
      break;
    case 'masthead':
      ctaSize = size || 'masthead';
      break;
    case 'user':
    case 'user-light':
      ctaSize = size || 'user';
      break;
    case 'link':
      ctaSize = size || 'unset';
      break;
    case 'dismiss':
      ctaSize = size || 'dismiss';
      break;
    case 'close':
      ctaSize = size || 'close';
      break;
    case 'back':
      ctaSize = size || 'back';
      break;
    default:
      ctaSize = size;
  }

  const levers: { [key: string]: string } = {};
  levers.variant = disabled ? styles.ctaVariants.disabled : styles.ctaVariants[variant];
  levers.size = styles.ctaSizes[ctaSize];
  const ctaClasses = dcnb(styles.cta, levers.size, levers.variant, className);

  return ctaClasses;
};
