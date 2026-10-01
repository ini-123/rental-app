import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isLoading: boolean;

  login: (user: User, token: string) => Promise<void>;
  logout: () => Promise<void>;
  loadSession: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: true,

  login: async (user, token) => {
    await SecureStore.setItemAsync('auth_token', token);
    await SecureStore.setItemAsync('user', JSON.stringify(user));

    set({
      user,
      token,
      isLoading: false,
    });
  },

  logout: async () => {
    await SecureStore.deleteItemAsync('auth_token');
    await SecureStore.deleteItemAsync('user');

    set({
      user: null,
      token: null,
      isLoading: false,
    });
  },

  loadSession: async () => {
    try {
      const token = await SecureStore.getItemAsync('auth_token');
      const userString = await SecureStore.getItemAsync('user');

      if (token && userString) {
        set({
          token,
          user: JSON.parse(userString),
          isLoading: false,
        });
      } else {
        set({
          token: null,
          user: null,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error('Failed to load session:', error);

      set({
        token: null,
        user: null,
        isLoading: false,
      });
    }
  },
}));
