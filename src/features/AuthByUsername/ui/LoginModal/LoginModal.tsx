import { classNames } from 'shared/lib';
import { Modal } from 'shared/ui/Modal/Modal';

import { memo, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import LoginFormAsync from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = memo(({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal
    className={classNames('', {}, className ? [className] : [])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Loader />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
));
