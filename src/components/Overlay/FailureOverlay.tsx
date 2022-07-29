import React from 'react';
import { Cta } from '../Cta';
import { Overlay } from './Overlay';
import * as styles from './FailureOverlay.style';

export interface FailureOverlayProps {
  /**
   * Failure message title
   */
  title?: React.ReactNode;
  /**
   * Failure message content
   */
  message?: React.ReactNode;
  /**
   * Continue button label
   */
  label?: string
   /**
    * Whether to display the failure overlay or not
    */
   open?: boolean;
   /**
    * Close handler for overlay
    */
   onClose?: () => void;
   /**
    * Optional close timeout (in milliseconds)
    */
   closeTimeout?: number;
   /**
    * Click handler for try again
    */
   onTryAgain?: () => void;
   tryAgainLabel?: string;
}

/**
 * Basic failure acknowlegement overlay.
 */
export const FailureOverlay = ({
  open,
  onClose = () => undefined,
  closeTimeout,
  title = 'Something went wrong.',
  message = 'Your information was not updated correctly.',
  label = 'Continue',
  onTryAgain,
  tryAgainLabel = 'Try Again?',
}: FailureOverlayProps) => (
  <Overlay
    open={open}
    onClose={onClose}
    closeTimeout={closeTimeout}
    closeOnEsc
  >
    <div data-test="failureOverlay" className={styles.root}>
      <div className={styles.close}>
        <Cta
          variant="close"
          onClick={onClose}
        >
          Close
        </Cta>
      </div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.content}>
        {message}
      </div>
      <div className={styles.actions}>
        {onTryAgain ? (
          <Cta onClick={onTryAgain}>
            {tryAgainLabel}
          </Cta>
        ) : (
          <Cta data-test="closeBtn" onClick={onClose}>
            {label}
          </Cta>
        )}
      </div>
      <div className={styles.footnote}>
        If the problem persists, please contact us at TBD
      </div>
    </div>
  </Overlay>
);
