import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Role } from '@user-office-software-libs/shared-types';
import React from 'react';

import RoleTable from './RoleTable';

type RoleModalProps = {
  show: boolean;
  close: () => void;
  add: (role: Role[]) => void;
  activeRoles?: Role[];
};

const RoleModal: React.FC<RoleModalProps> = ({
  show,
  close,
  add,
  activeRoles,
}) => {
  return (
    <Dialog
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={show}
      onClose={() => close()}
      disableScrollLock={true}
      data-cy="role-modal"
    >
      <DialogContent>
        <RoleTable add={add} activeRoles={activeRoles} />
      </DialogContent>
    </Dialog>
  );
};

export default RoleModal;
