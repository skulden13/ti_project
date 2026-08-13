import { getUserAuthData, getUserRoles, UserRole } from 'entities/User';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  const authUserRoles = useSelector(getUserRoles);
  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }
    return roles.some((r) => {
      const hasRole = authUserRoles?.includes(r);
      return hasRole;
    });
  }, [roles, authUserRoles]);

  if (!auth) {
    return <Navigate to={RoutePaths.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePaths.forbidden} state={{ from: location }} replace />;
  }

  return children;
};
