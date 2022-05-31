import { User } from '@user-office-software-libs/shared-types';

export const getFullUserName = (
  user?: Pick<User, 'firstname' | 'lastname'> | null
): string => (user ? `${user.firstname} ${user.lastname}` : 'None');
