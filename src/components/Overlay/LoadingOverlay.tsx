import React from 'react';
import { Overlay, OverlayProps } from './Overlay';
import { Text } from '../Typography';
import * as styles from './LoadingOverlay.style';

export interface LoadingOverlayProps extends OverlayProps {
  label?: React.ReactNode;
}

export const LoadingOverlay = ({
  label,
  ...rest
}: LoadingOverlayProps) => (
  <Overlay {...rest}>
    <div data-test="loadingOverlay" className={styles.card}>
      {label && (
        <Text className={styles.label}>{label}</Text>
      )}
    </div>
  </Overlay>
);
