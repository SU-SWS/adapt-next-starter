import React, { AllHTMLAttributes } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import { Logo } from '../Logo/Logo';
import { Link } from '../Link/Link';
import { FlexBox } from '../FlexBox/FlexBox';
import * as styles from './Lockup.styles';

/**
 * Stanford Department Branding Component.
 *
 */
export type LockupProps = {
  className?: ClassValue;
  color?: 'default' | 'white';
  text: string;
  href?: string;
}

type DCNBAttributes = Omit<AllHTMLAttributes<any>, 'className'>;

export const Lockup = ({
  className,
  color = 'default',
  text,
  href,
  ...rest
}: LockupProps & DCNBAttributes) => {
  const levers: { [key: string]: string } = {};
  levers.textColor = styles.textColor[color];
  levers.bar = styles.barColor[color];

  // Partials
  const LockupContent = (
    <FlexBox alignItems="center">
      <Logo
        color={color === 'white' ? 'white' : 'cardinal-red'}
        isLink={false}
        className={dcnb(styles.logo)}
      />
      <div className={dcnb(styles.bar, levers.bar)} aria-hidden />
      <div className={dcnb(styles.text, levers.textColor)}>
        {text}
      </div>
    </FlexBox>
  );

  if (href) {
    return (
      <Link
        className={dcnb(styles.root, className)}
        href={href}
        {...rest}
      >
        {LockupContent}
      </Link>
    );
  }

  return (
    <div className={dcnb(styles.root, className)} {...rest}>
      {LockupContent}
    </div>
  );
};
