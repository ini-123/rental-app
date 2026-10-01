import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

type OnboardingState = {
  hasSeenOnboarding: boolean | null;
  loadOnboardingState: () => Promise<void>;
  completeOnboarding: () => Promise<void>;
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  hasSeenOnboarding: null,

  loadOnboardingState: async () => {
    try {
      const value = await AsyncStorage.getItem('hasSeenOnboarding');

      set({
        hasSeenOnboarding: value === 'true',
      });
    } catch (error) {
      console.error('Failed to load onboarding state:', error);

      set({
        hasSeenOnboarding: false,
      });
    }
  },

  completeOnboarding: async () => {
    try {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');

      set({
        hasSeenOnboarding: true,
      });
    } catch (error) {
      console.error('Failed to save onboarding state:', error);
    }
  },
}));
