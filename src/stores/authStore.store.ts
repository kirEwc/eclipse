import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { decryptData, encryptData } from '@/security/encryptData';
import { deleteAuthCookies } from '@/app/actions/deleteAuthCookies';

interface AuthState {
  user: { email: string, role: string } | null;
  isAuthenticated: boolean;
  login: (user: { email: string, role: string }) => void;
  logout: () => void;
}

const SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 horas en milisegundos


export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: ({ email, role }) => {
        set({
          user: { email, role },
          isAuthenticated: true,
        });

        // Iniciar temporizador de 1 minuto para cerrar sesión automáticamente
        setTimeout(() => {
          deleteAuthCookies();
          set({ user: null, isAuthenticated: false });
          localStorage.clear(); // Limpiar el almacenamiento local
        }, SESSION_TIMEOUT); // Ejecutar logout después de 1 minuto
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
        localStorage.clear(); // Limpiar todo el almacenamiento local
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
