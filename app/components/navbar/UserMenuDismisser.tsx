'use client';

import { useCallback, useEffect } from 'react';

interface UserMenuDismisserProps {
  onClose(): void;
  isOpen: boolean;
}

const UserMenuDismisser = (props: UserMenuDismisserProps) => {
  const dismiss = useCallback(
    (event: MouseEvent) => {
      const popover = document.getElementById('menuPopover');
      const target = event.target as HTMLElement | null;

      if (props.isOpen && popover && target && !popover.contains(target)) {
        props.onClose();
      }
    },
    [props]
  );

  useEffect(() => {
    document.addEventListener('click', dismiss);
    return () => document.removeEventListener('click', dismiss);
  }, [dismiss]);

  return null;
};

export default UserMenuDismisser;
