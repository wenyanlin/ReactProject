import { AuthProvider } from '@org/auth-data-access';
import { AppRouter } from './routes';

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
