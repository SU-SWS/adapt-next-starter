import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Lockup } from '../Lockup/Lockup';
import { FlexBox } from '../FlexBox/FlexBox';
import { Link } from '../Link/Link';
import { UtilityNav } from '../UtilityNav/UtilityNav';
import { UserMenu } from '../UserMenu/UserMenu';
import routes from '../../routes';
import * as styles from './Masthead.styles';

export const Masthead = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <UtilityNav className={styles.utilityNavMobile} />
      <FlexBox
        as="header"
        alignItems="center"
        justifyContent="between"
        className={styles.root}
      >
        <Link href={routes.home()} className={styles.logoLink}>
          <div className={styles.lockupWrapper}>
            <Lockup text="Pass" />
          </div>
          <span className={styles.directoryLogo}>
            Directory
          </span>
        </Link>
        <FlexBox alignItems="center">
          <UtilityNav className={styles.utilityNav} />
          {isAuthenticated && (
            <UserMenu className={styles.userMenu} />
          )}
        </FlexBox>
      </FlexBox>
    </div>
  );
};
