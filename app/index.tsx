import { ActivityIndicator, View } from 'react-native';
import { useEffect } from 'react';
import { router } from 'expo-router';

import { useAuthStore } from '../store/authStore';
import { useOnboardingStore } from '../store/onboardingStore';
import { COLORS } from '../constants/colors';

export default function Index() {
  
  const { hasSeenOnboarding, loadOnboardingState } = useOnboardingStore();

  const { user, isLoading, loadSession } = useAuthStore();

  useEffect(() => {
    async function initializeApp() {
      await Promise.all([loadOnboardingState(), loadSession()]);
    }

    initializeApp();
  }, []);

  useEffect(() => {
    if (hasSeenOnboarding === null || isLoading) {
      return;
    }

    if (!hasSeenOnboarding) {
      router.replace('/onboarding/welcome');
      return;
    }

    if (user) {
      router.replace('/(tabs)/home');
    } else {
      router.replace('/(auth)/login');
    }
  }, [hasSeenOnboarding, user, isLoading]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
      }}
    >
      
      <ActivityIndicator size="large" color={COLORS.white} />
    </View>
  );
}

