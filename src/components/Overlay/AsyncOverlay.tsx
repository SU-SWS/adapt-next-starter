import React from 'react';
import { LoadingOverlay, LoadingOverlayProps } from './LoadingOverlay';
import { SuccessOverlay, SuccessOverlayProps } from './SuccessOverlay';
import { FailureOverlay, FailureOverlayProps } from './FailureOverlay';

export interface AsyncOverlayProps {
  // Display loading overlay
  isLoading?: boolean;
  // Loading overlay props
  loadingProps?: Omit<LoadingOverlayProps, 'open'>;
  // Display success overlay (overridden by isLoading)
  isSuccess?: boolean;
  // success overlay props
  successProps?: Omit<SuccessOverlayProps, 'open'|'onClose'>;
  // Display failure overlay (only iff !loading and !success)
  isFailure?: boolean;
  // failure overlay props
  failureProps?: Omit<FailureOverlayProps, 'open'|'onClose'>;
  // onClose handler for both sucess and failure overlays
  onClose?: () => void;
}

/**
 * Simple composed component to handle the overlay display for an async request lifecycle
 */
export const AsyncOverlay = ({
  isLoading = false,
  loadingProps = {},
  isSuccess = false,
  successProps = {},
  isFailure = false,
  failureProps = {},
  onClose,
}: AsyncOverlayProps) => (
  <>
    <LoadingOverlay
      {...loadingProps}
      open={isLoading}
    />
    <SuccessOverlay
      {...successProps}
      open={!isLoading && isSuccess}
      onAcknowledgeSuccess={onClose}
    />
    <FailureOverlay
      {...failureProps}
      open={!isLoading && !isSuccess && isFailure}
      onClose={onClose}
    />
  </>
);
