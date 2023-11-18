import { useContext } from 'react';

// context
import { AuthContext } from './AuthProvider';

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuthContext context must be use inside AuthProvider');

  return context;
};