import React, { useCallback, useMemo, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { ConfirmOverlay } from '../Overlay';
import { useTimer } from '../../hooks/useTimer';
import { pluralize } from '../../utils/pluralize';
import routes from '../../routes';

export interface AuthIdleTimeoutOverlayProps {
  /**
   * Initial timeout until display idle modal notification
   */
  idleTimeout?: number;
  /**
   * Duration to display modal before logging user out
   */
  modalTimeout?: number;
}

export const AuthIdleTimeoutOverlay = ({
  idleTimeout = 45 * 60 * 1000, // 45 min
  modalTimeout = 15 * 60 * 1000, // 15 min
}: AuthIdleTimeoutOverlayProps) => {
  const [open, setOpen] = useState(false);
  const logout = () => window.location.replace(routes.logout());
  const timeoutLogout = () => window.location.replace(routes.logout('auth_timeout'));

  // Idle timer until auto-logout
  const modalTimer = useTimer({
    timeout: modalTimeout,
    onTimeout: timeoutLogout,
  });
  const closeModal = useCallback(() => {
    modalTimer.reset();
    setOpen(false);
  }, [modalTimer, setOpen]);

  const startModalTimer = useCallback(() => {
    setOpen(true);
    modalTimer.start();
  }, [setOpen, modalTimer]);

  // Idle time until displaying modal
  useIdleTimer({
    timeout: idleTimeout,
    onIdle: startModalTimer,
  });
  const duration = useMemo(() => {
    if (modalTimer.isRunning) {
      const mins = Math.ceil(modalTimer.remainingTime / (1000 * 60));
      const secs = Math.floor(modalTimer.remainingTime / 1000);

      if (mins > 1) return `${mins} minutes`;

      return `${secs} ${pluralize(secs, 'second')}`;
    }

    return undefined;
  }, [modalTimer.isRunning, modalTimer.remainingTime]);

  return (
    <ConfirmOverlay
      className="su-backdrop-blur"
      open={open}
      onClose={closeModal}
      onCancel={logout}
      cancelLabel="Log out"
      onConfirm={closeModal}
      confirmLabel="Continue"
    >
      Your session will expire due to inactivity in <b>{duration}</b>
    </ConfirmOverlay>
  );
};
