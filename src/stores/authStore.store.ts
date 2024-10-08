import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { decryptData, encryptData } from '@/security/encryptData';

interface AuthState {
  user: { email: string,role:string} | null; 
  isAuthenticated: boolean;
  login: (user: { email: string,role:string}) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: ({ email,role}) => {
        set({ user: { email,role }, isAuthenticated: true });

      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
        localStorage.clear();      
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => ({
        getItem: (name) => {
          const storedValue = localStorage.getItem(name);
          if (storedValue) {
            try {
              return decryptData(storedValue);
            } catch (error) {
              console.error('Error al descifrar los datos:', error);
              return null;
            }
          }
          return null;
        },
        setItem: (name, value) => {
          const encryptedValue = encryptData(value);
          localStorage.setItem(name, encryptedValue);
        },
        removeItem: (name) => localStorage.removeItem(name),
      })),
    }
  )
);
