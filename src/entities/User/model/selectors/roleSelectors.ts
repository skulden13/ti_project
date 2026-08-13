import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { UserRole } from '../types/user';

const getUserRoles = (state: StateSchema): UserRole[] => state.user.authData?.roles ?? [];

const isAdmin = createSelector(
  getUserRoles,
  (roles: UserRole[]) => Boolean(roles?.includes(UserRole.ADMIN)),
);

const isUser = createSelector(
  getUserRoles,
  (roles: UserRole[]) => Boolean(roles?.includes(UserRole.USER)),
);

const isManager = createSelector(
  getUserRoles,
  (roles: UserRole[]) => Boolean(roles?.includes(UserRole.MANAGER)),
);

export {
  getUserRoles, isAdmin, isUser, isManager,
};
