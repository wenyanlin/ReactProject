import { createContext, ReactNode, useContext, useState } from 'react';
import { mockUser } from './auth.mock';
import { User } from './AuthTypes';

type AuthContextValue = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(mockUser);

  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);

  const contextValue: AuthContextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth 必須在 AuthProvider 內使用');
  }
  return context;
}
