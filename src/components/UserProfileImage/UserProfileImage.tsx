import React from 'react';
import Image from 'next/image';
import { dcnb } from 'cnbuilder';
import * as styles from './UserProfileImage.style';

export interface UserProfileImageProps extends React.HTMLAttributes<HTMLDivElement> {
  // Optional src url for overriding contact
  src?: string;
  // Size
  size?: styles.SizeType;
  // Color for border and initial when present
  color?: styles.ColorType;
  border?: boolean;
}

/**
 * UserProfileImage Component
 * Will extract profile photo image from contact object and render when present.
 * Defaults to first initial when no profile photo found.
 * Can be overridden by passing src directly
 *
 * Notes:
 *  - Needs to pass along classes to provide custom styling
 *  - Render first initial when no profile image available
 */
export const UserProfileImage = ({
  src: srcOverride,
  size = 'full',
  color,
  border = true,
  ...divProps
}: UserProfileImageProps) => {
  const profileImage = 'https://placedog.net/500/500/random'; // TODO: Replace with API Fetch
  const firstName = 'Ziguan'; // TODO: Replace with real data.
  const firstInitial = firstName.trim()[0].toUpperCase();

  return (
    <div {...divProps} className={dcnb(styles.root, divProps.className)}>
      <div className={styles.circle({ size, border, color })}>
        {(profileImage || srcOverride) ? (
          <div>
            {srcOverride ? (
              <Image
                src={srcOverride}
                alt="User Profile Image"
                layout="fill"
                className={styles.img}
              />
            ) : (
              <Image
                src={profileImage}
                alt="User Profile Image"
                layout="fill"
                className={styles.img}
              />
            )}
          </div>
        ) : (
          <div>
            <svg viewBox="0 0 20 20">
              <text
                className={styles.initialText(color)}
                x="50%"
                y="55%"
                fontSize="15"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                {firstInitial}
              </text>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
