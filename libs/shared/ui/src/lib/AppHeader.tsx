import { ReactNode } from 'react';

interface HeaderUser {
  id: string;
  name: string;
}

interface AppHeaderProps {
  title: ReactNode;
  user: HeaderUser | null;
}

export function AppHeader({ title, user }: AppHeaderProps) {
  return (
    <header className="w-full bg-amber-400 font-bold flex justify-between items-center px-2 py-1">
      <div>{title}</div>
      {user && <div>Hi, {user.name}</div>}
    </header>
  );
}
