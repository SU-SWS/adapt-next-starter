import React, { useEffect, useRef } from 'react';
import Modal from '@mui/material/Modal';
import * as styles from './Overlay.style';

export interface OverlayProps {
  // Optional className for root node
  className?: string;
  // Overlay content
  children?: React.ReactNode;
  // Whether the overlay is open or not
  open?: boolean;
  // Close handler
  onClose?: () => void;
  // Automatically close overlay after timeout (milliseconds)
  closeTimeout?: number;
  // Fire onClose when clicking overlay
  closeOnClickOverlay?: boolean;
  // Fire onClose when esc key hit
  closeOnEsc?: boolean;
}

/**
 * Overlay component with basic behavioral props. Use as basis for composed overlay components.
 */
export const Overlay = ({
  className,
  children,
  open = false,
  onClose = () => undefined,
  closeOnEsc = false,
  closeOnClickOverlay = false,
  closeTimeout,
}: OverlayProps) => {
  // Handle close timeout
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const clearTimeout = () => window.clearTimeout(timeoutRef.current);
  useEffect(() => {
    clearTimeout();
    // Set timeout when opened
    if (open && closeTimeout) {
      timeoutRef.current = setTimeout(onClose, closeTimeout);
    }

    // Always clear on unmount/change
    return clearTimeout;
  }, [open, closeTimeout, onClose]);

  return (
    <Modal
      className={styles.root({ className })}
      open={open}
      disableEscapeKeyDown={!closeOnEsc}
      onBackdropClick={onClose}
      onClose={onClose}
      BackdropProps={{ onClick: closeOnClickOverlay ? onClose : undefined }}
    >
      <div>{children}</div>
    </Modal>
  );
};
