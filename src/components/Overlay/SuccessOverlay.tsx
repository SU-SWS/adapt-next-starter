import React from 'react';
import { Cta } from '../Cta';
import { HeroIcon } from '../HeroIcon/HeroIcon';
import { Overlay } from './Overlay';
import * as styles from './SuccessOverlay.style';

export interface SuccessOverlayProps {
  /**
   * Success message content
   */
  message?: React.ReactNode;
  /**
   * Acknolwedge button label
   */
  label?: React.ReactNode
  /**
   * Whether to display the success overlay or not
   */
  open?: boolean;
  /**
   * Close handler for overlay
   */
  onAcknowledgeSuccess?: () => void;
  /**
   * Optional close timeout (in milliseconds)
   */
  closeTimeout?: number;
}

/**
 * Basic success acknowlegement overlay.
 */
export const SuccessOverlay = ({
  message = 'Your information was successfully updated!',
  label = 'Acknowledge',
  open,
  onAcknowledgeSuccess = () => undefined,
  closeTimeout,
}: SuccessOverlayProps) => (
  <Overlay
    closeTimeout={closeTimeout}
    open={open}
    onClose={onAcknowledgeSuccess}
    closeOnEsc
    closeOnClickOverlay
  >
    <div data-test="successOverlay" className={styles.root}>
      <div className={styles.close}>
        <Cta
          variant="close"
          onClick={onAcknowledgeSuccess}
        >
          Close
        </Cta>
      </div>
      <div className={styles.content}>
        <div className={styles.icon}>
          <HeroIcon icon="check" />
        </div>
        {message}
      </div>
      <div className={styles.actions}>
        <Cta data-test="acknowledgeBtn" onClick={onAcknowledgeSuccess}>
          {label}
        </Cta>
      </div>
    </div>
  </Overlay>
);
