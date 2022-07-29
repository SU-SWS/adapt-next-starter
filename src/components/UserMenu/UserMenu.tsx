import React, { useState, useRef } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import { Cta } from '../Cta/Cta';
import { HeroIcon } from '../HeroIcon/HeroIcon';
import { UserProfileImage } from '../UserProfileImage';
import {
  useAuth,
  useEscape,
  useMediaQuery,
  useOnClickOutside,
} from '../../hooks';
import { breakpoints, commonExternalLinks as links } from '../../utils/variables';
import * as styles from './UserMenu.styles';

export interface UserMenuProps {
  className?: ClassValue;
}

export const UserMenu = ({ className }: UserMenuProps) => {
  const { logout } = useAuth();
  const isLoading = false; // TODO: Replace with API Fetch
  const contact = {}; // TODO: Replace with real data
  const username = 'Ziguan';
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const showGreeting = useMediaQuery(`(min-width: ${breakpoints.xl}px)`);
  // For a11y and speech input, the aria label should start with the visible text,
  // ie, the greeting when it becomes visible at XL breaipoint
  const buttonAriaLabel = `${showGreeting ? `Hi, ${username} - ` : ''}${menuOpened ? 'Close' : 'Open'} user menu`;

  useOnClickOutside(menuRef, () => setMenuOpened(false));

  // If menu is open, close on escape and return focus to the button
  useEscape(() => {
    if (menuOpened) {
      setMenuOpened(false);
      buttonRef.current?.focus();
    }
  });

  if (!contact || isLoading) {
    return null;
  }

  return (
    <nav aria-label="User Menu" ref={menuRef} className={dcnb(styles.root, className)}>
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={menuOpened}
        aria-label={buttonAriaLabel}
        className={styles.button}
        ref={buttonRef}
      >
        <span className={styles.greeting}>
          Hi, {username}
        </span>
        <div className={styles.circle({ menuOpened })}>
          <UserProfileImage border={false} />
        </div>
        <HeroIcon icon="chevron-down" className={styles.chevron({ menuOpened })} />
      </button>
      <div
        className={styles.menuWrapper({ menuOpened })}
        aria-hidden={!menuOpened}
      >
        <ul className={styles.menu}>
          <li>
            <Cta
              href={links.makeAGift}
              variant="user"
              icon="arrow-right"
              animate="right"
            >
              Your giving
            </Cta>
          </li>
          <li>
            <Cta
              href={links.saaGroups}
              variant="user"
              icon="arrow-right"
              animate="right"
            >
              Stanford Groups
            </Cta>
          </li>
        </ul>
        <ul className={styles.menu2}>
          <li>
            <Cta
              href={links.saaHelp}
              variant="user-light"
              icon={null}
            >
              Help
            </Cta>
          </li>
          <li>
            <Cta
              onClick={logout}
              variant="user-light"
            >
              Log out
            </Cta>
          </li>
        </ul>
      </div>
    </nav>
  );
};
