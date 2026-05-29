import { useAuth } from './AuthContext';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

export function AuthGuard() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;

  //   return !user ? (
  //     <Navigate to="/login" state={{ from: location }} replace />
  //   ) : (
  //     <Outlet />
  //   );
}
