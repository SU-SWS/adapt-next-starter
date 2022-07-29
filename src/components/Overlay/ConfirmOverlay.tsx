import React from 'react';
import { Cta } from '../Cta';
import { Overlay, OverlayProps } from './Overlay';
import * as styles from './ConfirmOverlay.style';

export interface ConfirmOverlayProps extends Omit<OverlayProps, 'onClose'> {
  /**
   * onConfirm handler
   */
  onConfirm?: () => any;
  /**
   * onCancel handler
   */
  onCancel?: () => any;
  /**
   * Explicit onClose handler for top-right close button.
   * Will default to onCancel handler. Pass `false` to prevent rendering
   */
  onClose?: (() => any) | false;
  /**
   * Text label for cancel button
   */
  cancelLabel?: string
  /**
   * Text label for confirm button
   */
  confirmLabel?: string;
  /**
   * Disable action buttons
   */
  disabled?: boolean;
}

/**
 * Basic confirm overlay with confirm/cancel actions
 */
export const ConfirmOverlay = ({
  children,
  onConfirm,
  onCancel,
  onClose,
  cancelLabel = 'Go Back',
  confirmLabel = 'Continue',
  disabled,
  ...rest
}: ConfirmOverlayProps) => {
  const showCloseBtn = onClose !== false;
  const onCloseHandler = onClose || onCancel;

  return (
    <Overlay {...rest}>
      <div data-test="confirmOverlay" className={styles.root}>
        {showCloseBtn && (
          <div className={styles.close}>
            <Cta
              data-test="confirmOverlayCloseBtn"
              variant="close"
              onClick={onCloseHandler}
              disabled={disabled}
            >
              Close
            </Cta>
          </div>
        )}
        <div className={styles.content}>
          {children}
        </div>
        {(onCancel || onConfirm) && (
          <div className={styles.actions}>
            {onCancel && (
              <Cta
                data-test="confirmOverlayCancelBtn"
                onClick={onCancel}
                variant="secondary"
                className={styles.btn}
                disabled={disabled}
              >
                {cancelLabel}
              </Cta>
            )}
            {onConfirm && (
              <Cta
                data-test="confirmOverlayConfirmBtn"
                onClick={onConfirm}
                className={styles.btn}
                disabled={disabled}
              >
                {confirmLabel}
              </Cta>
            )}
          </div>
        )}
      </div>
    </Overlay>
  );
};
