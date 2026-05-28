import { useAuth } from '@org/auth';
import { AppHeader } from '@org/shared-ui';
import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  const { user } = useAuth();
  return (
    <div className="max-w-lg mx-auto bg-white flex flex-col min-h-screen">
      <AppHeader title="React Project" user={user}></AppHeader>
      <main>{children}</main>
    </div>
  );
}
